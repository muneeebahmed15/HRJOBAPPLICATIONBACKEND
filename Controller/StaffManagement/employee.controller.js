const employee = require ("../../Modals/StaffManagement/Employee.Modals");
const nodemailer = require ("nodemailer");
const Interview = require("../../Modals/StaffManagement/Interview.Modals");


const addEmployeeRecord = async(req, res)=>{

    const {name,
        email,
        phone,
        city,
        address,
        state,
        country,
        skills,
        current_company,
        salary_required,
        current_pay,
        linkedin,
        experience,
        gender,
        degree,
        institute,
        martial_status} = req.body;

        // console.log("Request Body:", req.body);

        if(!name || !email || !phone || !city || !address || !state || !country ||
        !skills || !current_company || !salary_required || !current_pay || !linkedin || !experience || !gender || !degree || !institute || !martial_status){
            res.status(400).json({msg:"All fields are manadatory"});
        }else{

        const data = await employee.create({name, email, phone, city, address, state, country,
        skills, current_company, salary_required, current_pay, linkedin, experience, gender, degree, institute, martial_status, registeredBy:req.user.id});

            // console.log("dataa",data);

        if(data){
            res.status(200).json({msg:"Record Added"})
        }else{
            res.status(400).json({msg:"Data is not valid"});
        }}
}

const getEmployeeRecord = async(req, res)=>{

    try {
        const getEmployee = await employee.find();
        if(getEmployee){
            res.status(200).json(getEmployee);
        }else{
            res.status(404).json("Record not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");
    }
}

const transporter = nodemailer.createTransport({
    host: process.env.smtp_host,
    port: process.env.smtp_port,
    secure: false, // Ensure secure connection for Gmail
    auth: {
      user: process.env.smtp_email,
      pass: process.env.smtp_password, // Corrected typo in variable name
    },
  });
  
const sendMail = async (req, res) => {
    const {interviewee_id, interviewee_email, interviewee, date, time, location, interviewtype, interviewer, interviewer_email} = req.body;

    if(!interviewee_id || !interviewee_email || !interviewee || !date || !time || !location || !interviewtype || !interviewer || !interviewer_email){
        res.status(400).json("All fields are manadatory")
    }
  else{
    var mailOptions = {
      from: process.env.smtp_email,
      to: interviewee_email,
      cc: interviewer_email,
      subject: "Interview Call",
      text: `Hi Mr/Ms.${interviewee},\n\nHope you are doing well.\n\nWe would like to invite you for an interview scheduled as follows:\n\nDate: ${date}\nTime: ${time}\nInterview Type: ${interviewtype}\nLocation: ${location}\n\n.\n\nBest regards,\nInterview Team`
    };
  
    try {
      const interview = new Interview({
        interviewAssignedBy:req.user.id,
        interviewee_id,
        interviewee,
        interviewee_email,
        date,
        time,
        location,
        interviewtype,
        interviewer,
        interviewer_email,
    });
    await interview.save();

      await transporter.sendMail(mailOptions);
      // console.log("Email sent successfully");
      res.status(200).json("Interview sent successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Error sending email");
    }
}
  };
  
  

module.exports = {addEmployeeRecord, getEmployeeRecord, sendMail}