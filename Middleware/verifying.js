const jwt = require("jsonwebtoken")


const verifyToken = async(req, res, next)=>{
    const token = req.headers.cookies;
 
    if(!token) return res.status(401).json("Unauthorized");


    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err) return res.status(403).json("Forbidden");

        // console.log(user);
        req.user = user;
        next();
    })
}

module.exports = {verifyToken};