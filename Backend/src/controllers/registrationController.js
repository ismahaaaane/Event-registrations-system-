import prisma from "../config/prisma.js";

// POST /api/registrations

export const  createRegistration = async (req, res) => {
    try{
        const { user_id, event_id} = req.body;

        //Check if user exists
        const user = await prisma.users.findUnique({
            where: {
                id: BigInt(user_id)
            }
        });
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Check if event exists
        const event = await prisma.events.findUnique({
            where: {
                id: BigInt(event_id)
            }
        });
        if(!event){
            return res.status(404).json({
                message: "Event not found"
            });
        }

        //Check if user already registered
        const existingReg= await prisma.registrations.findUnique({
            where: {
                user_id: BigInt(user_id),
                event_id: BigInt(event_id)
            }
        });
        if(existingReg){
            return res.status(400).json({
                message: "User is already registered for this event ! "
            });
        }

        //Check if event is full
        const regCount = await prisma.registrations.count({
            where: {
                event_id: BigInt(event_id)
            }
        });
        if(regCount>= event.capacity) {
            return res.status(400).json({
                message: " Event is full"
            });
        }

        // Create registration 
        const registration = await prisma.registrations.create({data: {
            user_id: BigInt(user_id),
            event_id: BigInt(event_id),
            reg_date:  new Date(),
            reg_statu: "Registered"
          }
        });

        res.status(201).json(registration);

    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    };
}

// GET /api/registrations/user/:userId

export const getUserRegistration = async (req, res) => {
    try{
        const {userId} = req.params;

        const registrations = await prisma.registrations.findMany({
            where: {
                user_id: BigInt(userId)
            },
            include: {
                events: true
            }
        });

        res.status(200).json(registrations);

    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    };
}

// DELETE /api/registrations/:id

export const cancelRegistration = async (req, res) => {
    try{ 
        const {id} = req.params;

        const registration = await prisma.registrations.findUnique({
            where: {
                reg_id: BigInt(id)
            }
        });
        if(!registration){
            return res.status(404).json({
                message: "Registration not found"
            });
        }

        await prisma.registrations.delete({
            where: {
                reg_id: BigInt(id)
            }
        });

        res.status(200).json({
            message: "Registration cancelled succefully!"
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};