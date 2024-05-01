const job = require("../../Modals/HiringManagement/jobOpening.modal")

const createJob = async(req, res) =>{
    const data =req.body
    // console.log(data);

    try {
        const response = await job.create(data);
        if(response){
            res.status(200).json({status: true, response})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const updateJob = async(req, res) =>{
    const {id} = req.params;
    const data = req.body;
    // console.log(data);

    try {
        const response = await job.findOneAndUpdate({_id:id}, {$set: data}, {new: true})
        if(response){
            res.status(200).json({status: true, response})
        }else{
            res.status(400).json({status: false, error: "Job not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const deleteJob = async(req, res) =>{
    const {id} = req.params;

    try {
        const response = await job.deleteOne({_id: id});
        if(response){
            res.status(200).json({status: true, response})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const allJobs = async(req, res) =>{

    try {
        const response = await job.find();
        res.status(200).json({status: true, response})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const singleJob = async(req, res) =>{
    const {id} = req.params;
    // console.log(id)

    try {
        const response = await job.findOne({_id: id});
        if(response){
            res.status(200).json({status: true, response})
        }else{
            res.status(400).json({status: false, error: "Job not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = { createJob, updateJob, deleteJob, allJobs, singleJob }