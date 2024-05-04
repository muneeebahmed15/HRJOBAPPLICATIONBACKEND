const candidate = require("../../Modals/HiringManagement/candidate.modal");
const job = require("../../Modals/HiringManagement/jobOpening.modal");

const registerCandidate = async(req, res) =>{
    const data = req.body;
    // console.log(data);

    try {

            const check = await candidate.findOne({email: data.email})
            if(check){
                res.status(200).json({status: false, check, error: "Already applied for this job"})
            }else{

        const response = await candidate.create(data);
        if(response){
            const applicant = await job.findOneAndUpdate({_id: response.jobId}, { $push: { applicants: response._id } }, { new:true})
            res.status(200).json({status: true, response});
        }else{
            res.status(400).json({status: false, error: "Failed to apply for this job"});
        }}
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const allCandidates = async(req, res) =>{

    try {
        const response = await candidate.find().populate("jobId");
        if(response){
            res.status(200).json({status: true, response});
        }else{
            res.status(400).json({status: false, error: "No candidate found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
}

const singleCandidate = async(req, res) =>{
    const {id} = req.params;

    try {
        const response = await candidate.findOne({_id: id}).populate("jobId");
        if(response){
            res.status(200).json({status: true, response})
        }else{
            res.status(400).json({status: false, error: "Not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const singleCandidateWithSpecificJob = async(req, res) =>{
    const {id} = req.params;
// console.log(id);
    try {
        const response = await candidate.find({jobId: id});
        if(response.length>0){
            res.status(200).json({status: true, response})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
}


module.exports = {registerCandidate, allCandidates, singleCandidate, singleCandidateWithSpecificJob}