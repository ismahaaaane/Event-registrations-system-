import prisma from "../config/prisma.js";

// GET  /api/events

export const getAllEvents = async (req, res) =>{
    try{
        const events = await prisma.events.findMany();
        res.status(200).json(events);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

// GET /api/events/:id

export const getEventById = async (req, res) =>{
    try{
        const {id} = req.params;
        const event = await prisma.events.findUnique({
            where : {
                event_id: BigInt(id)
            }
        });
        if(!event) {
            return res.status(404).json({
                message : "Event not found "
            });
        }

        res.status(200).json(event);

    }
    catch(error){
        res.status(500).json({
            message : error.message
        });
    }

};

// POST /api/events

export const createEvent = async (req, res) => {
    try{
        const { 
            title,
            description,
            event_date,
            event_time,
            event_location,
            capacity,
            organizer_id ,
        } = req.body;
        

        const event = await prisma.events.create({
            data: {
                title,
                description,
                event_date: new Date(event_date),
                event_time: new Date(`1970-01-01T${event_time}`),
                event_location,
                capacity,
                organizer_id: BigInt(organizer_id) 
                
            }

        });

        res.status(201).json({
    ...event,
    event_id: event.event_id.toString(),
    organizer_id: event.organizer_id.toString()
});


    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

// PUT /api/events/:id

export const updateEvent = async (res, req) => {
    try{

        const{id} = req.params;

        const {
            title,
            description,
            event_date,
            event_time,
            event_location,
            capacity
        } = req.body;

        const event = await prisma.events.update ({
            where: {
                event_id: BigInt(id)
            },
            data : {
                 title,
                description,
                event_date: new Date(event_date),
                event_time: new Date(`1970-01-01T${event_time}`),
                event_location,
                capacity
            }
        });

        res.status(200).json(event);

    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE /api/events/:id

export const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params;
        await prisma.events.delete ({
            where: {
            event_id: BigInt(id)
            }
        });

        res.status(200).json({
            message: "Event deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

