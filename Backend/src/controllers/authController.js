import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//POST /api/auth/register

export const register = async (req, res) => {
    try{
        const {first_name, last_name , email, password} = req.body;
        
        // Check required fields
        if(!first_name || !last_name || !email || !password ){
            return res.status(400).json({
                message: " All fields are required."
            });
        }

        //Check if email already exists

        const existingUser = await prisma.users.findUnique({
            where: {
                email
            }
        });

        if(existingUser){
            return res.status(400).json({
                message: "Email already exists "
            });
        }

        //Hash the password
        
        const hashedPassword = await bcrypt.hash(password, 10);

        //Save user

        const user = await prisma.users.create({
            data: {
                first_name,
                last_name,
                email,
                password : hashedPassword

            }
        });

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user

        res.status(201).json({
            message: "User registered succefully" ,
            user: {
                ...userWithoutPassword,
                id: user.id.toString()
            }
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

// POST /api/auth/login

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });
         if(!user){
            return res.status(404).json({
            message: "User not found"
        });
    }

    // Compare passwords

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    // Generate JWT
    const token= jwt.sign(
        {
            id: user.id.toString(),
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user.id.toString(),
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        }
    });

}
catch(error){
    res.status(500).json({
        message: error.message
    });
}
};

export const getMe = async (req, res) => {
    try{
        const user = await prisma.users.findUnique({
            where: {
                id: BigInt(req.user.id)
            }
        });

        if(!user) {
            return res.status(404).json({
                message: "User not found"
            });

        }

        //Not sending any passwords

        const {password: _,...uerWithoutPassword} = user;

        res.status(200).json({
            user: {
                ...userWithoutPassword,
                id: user.id.toString()
            }
        });

    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};