import prisma from "../config/prisma.js";

export const getAllUsers = async (req, res) => {
    try{
        const users = await prisma.users.findMany({
             select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                created_at: true
            }
        });

        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

export const getUserById = async (req, res) =>{
    try{
        const {id} = req.params;

        const user = await prisma.users.findUnique({
            where: {
                id: BigInt(id)
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                created_at: true
            }
        });

        if(!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    try{
        const {id} = req.params;
        const {first_name, last_name, email} = req.body;
        
        //Check if user exists
        const user = await prisma.users.findUnique({
            where: {
                id: BigInt(id)
            }
        });
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        const updatedUser = await prisma.users.update({
            where: { id: BigInt(id) },
            data: {
                first_name,
                last_name,
                email
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                created_at: true
            }
        });

        res.status(200).json(updatedUser);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

export const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        
        //Check if user exists
        const user = await prisma.users.findUnique({
            where: {
                id: BigInt(id)
            }
        });
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }
        
        await prisma.users.delete({
            where: { id: BigInt(id)}
        });

        res.status(200).json(
            {
                message: " User deleted successfully"
            }
        );
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};