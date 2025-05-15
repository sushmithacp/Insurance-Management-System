

const jwt = require('jsonwebtoken') 


const verifyToken = (req, res, next) => {
    const authHeader  = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('No token provided');
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).send('Failed to authenticate token');
        req.user = decoded;
        next();
    });
};

const authorizeRole = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.status(403).send('Unauthorized');
        }
    };
};


module.exports = {verifyToken, authorizeRole} 