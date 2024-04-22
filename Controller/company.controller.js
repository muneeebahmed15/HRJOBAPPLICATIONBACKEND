const company = require("../Modals/company.modal");
const staff = require('../Modals/staff.modal');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


//done registerCompany
const registerCompany = async(req, res) =>{
    const  {name, email, password} = req.body;

  try {
    if(!name || !email || !password){
        res.status(400).json("All fields required!");
    }

    const user = await company.findOne({email});
    const username = await company.findOne({name});

    if(user){
        res.status(400).json("Company already exists");
    }
    else if(username){
      res.status(400).json("Company with this name already exist")
    }
    else{
      const hashedPassword = bcrypt.hashSync(password, 10)
        const newUser = await company.create({name, email, password:hashedPassword});
        if(newUser){
            res.status(200).json({msg:"Company Registered Successfully", newUser});
        }else{
            res.status(400).json("Company not registered");
        }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
}


//done loginCompanyAdmin
const login = async(req,res) =>{
    const {email, password} = req.body;

    try {
        const user = await company.findOne({email});
        

        if(!user){

            const staffUser = await staff.findOne({email});

            if(!staffUser){
              res.status(404).json("User not found");
            }
            else if(!bcrypt.compareSync(password, staffUser.password)){
              res.status(401).json("Incorrect Password for staff");            
      }
      else{
          const token = jwt.sign({ id: staffUser._id }, process.env.JWT_SECRET);
          res.status(200).json({msg:"Login Successful", token});
      }
        
        }
        else if(!bcrypt.compareSync(password, user.password)){
          // console.log(password);
          // console.log(!bcrypt.compareSync(password, user.password));

                res.status(401).json("Incorrect Password for company");            
        }else{
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.status(200).json({msg:"Login Successful", token});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}


const recoverPassword = async (req, res) =>{
    const {email, password} = req.body;

    try {
      if(!email || !password){
        res.status(400).json("All fields are manadatory");
      }else{
        const user = await company.findOne({email});
        if(!user){
            res.status(404).json("User not found");
        }else{
            user.password = password;
            await user.save();
            res.status(200).json("Password updated successfully");
        }
      }

    } catch (error) {
      console.log(error);
      res.status(500).json("Internal Server Error");
    }
    
}

//done currentUser
const currentUser = async (req, res) =>{
  const user = req.user.id;
  // console.log(user);

  try {
    const current = await company.findOne({_id:user});

    if (!current) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      id: current._id,
      name: current.name
    });

  } catch (error) {
    res.status(500).json("Internal server error");
  }
}

module.exports = {registerCompany, login, recoverPassword, currentUser}