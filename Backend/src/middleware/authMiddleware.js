import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log("Authorization Header:", authHeader);

    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied"
        });
    }

    const token = authHeader.split(" ")[1];

    console.log("Token:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded:", decoded);

        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};