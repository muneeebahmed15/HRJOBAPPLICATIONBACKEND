const candidate = require("../../Modals/HiringManagement/candidate.modal");

const registerCandidate = async(req, res) =>{
    const data = req.body;
    // console.log(data);

    try {
        const response = await candidate.create(data);
        if(response){
            res.status(200).json({status: true, response});
        }else{
            res.status(400).json({status: false, error: "Failed to apply for this job"});
        }
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
        const response = await candidate.findOne({_id: id});
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


module.exports = {registerCandidate, allCandidates, singleCandidate}