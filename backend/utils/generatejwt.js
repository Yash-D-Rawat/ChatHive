import jwt from 'jsonwebtoken'

const generateAndSet = (userid, res)=>{
    
    const token = jwt.sign({userid}, process.env.JWT_SECRET,{
        expiresIn: 86400
    })

    res.cookie("jwt", token,{
        maxAge: 86400,
        httpOnly: true,
        sameSite: "strict"
    })
}

export default generateAndSet