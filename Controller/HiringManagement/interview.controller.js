const interview = require("../../Modals/HiringManagement/interview.modal");

const sheduleInterview = async(req, res) =>{
    const data = req.body;
    // console.log(data);

    try {
        const response = await interview.create(data);
        if(response){
            res.status(200).json({status: true, response})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const updateInterview = async(req, res) =>{
    const {id} = req.params;
    const data = req.body;

    try {
        const response = await interview.findOneAndUpdate({_id: id}, {$set: data}, {new :true});
        if(response){
            res.status(200).json({status: true, response});
        }else{
            res.status(400).json({status: false, msg: "No interview found"});
        }
    } catch (error) {
       console.log(error);
       res.status(500).json({error: "Internal Server Error"}); 
    }
}

const allInterviews = async(req, res) =>{

    try {
        const response = await interview.find();
        if(response){
            res.status(200).json({status: true, response});
        }else{
            res.status(400).json({status: false, error: "No interview found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const singleInterview = async(req, res) =>{
    const {id} = req.params;

    try {
        const response = await interview.findById(id);
        res.status(200).json({status: true, response})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {sheduleInterview, updateInterview, allInterviews, singleInterview}