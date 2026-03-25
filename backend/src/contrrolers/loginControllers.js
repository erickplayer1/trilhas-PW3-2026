const jwt = require(`jsonwebtoken`);

constuserModel = require(`../models/userModel`);

const SECRET_KEY = "segredo123";

exports.login = async (req, res) => {
    userModel.findByEmail(email,(user)=>{

        if (!user) {
            return res.status(401).json({
                message: `Usuario ou senha não encontrados`
            })
        }
        if (user.passaword !==passaword){
            return res.status(401).json({
                massage: `Usuario ou senha não encontrados`
            })
        }
        const token = jwy.sign({
            id: user.id,
               email: user.email,
               role: user.role
        })
        SECRET,
           { expiresIn: "1h" }
       )

       res.json({
           message: "Login realizado com sucesso",
           token,
           role: user.role

    })
}