const department = require("../Modals/department.modal")

const registerDepartment = async(req, res) =>{
    const {name, description} = req.body;

    try {
        const dep = await department.findOne({name})
        if(dep){
            res.status(200).json({status:false,msg: "Department with this name already exists"});
        }else{
            const newDep = await department.create({name, description})
            res.status(200).json({status:true,msg:"Department Added", data:newDep})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const updateDepartment = async(req, res) => {
    const { id, name } = req.body;
    // console.log(req.body);

    try {
        const dep = await department.findById(id);
        dep.name = name;
        await dep.save();

        // console.log(dep);

        
// console.log(dep);
        res.status(200).json({status: true, msg: "Department updated successfully", dep });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const allDepartment = async(req, res) =>{

    try {
        const dep = await department.find();
        res.status(200).json(dep)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const deleteDepartment = async(req, res) =>{
        const {id} =req.body

        console.log(id);
    try {
        const dep = await department.findByIdAndDelete(id);
        res.status(200).json({status: true, msg:"department deleted ", dep})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}


module.exports = {registerDepartment, updateDepartment, allDepartment, deleteDepartment}