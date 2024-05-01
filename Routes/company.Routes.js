const express = require ("express");
const {registerCompany, currentUser, login} = require("../Controller/StaffManagement/company.controller");
const { verifyToken } = require("../Middleware/verifying");
const { singleStaff, allStaff, removeStaff, updateStaff, test, newStaff } = require("../Controller/StaffManagement/staff.controller");
const { registerDepartment, updateDepartment, allDepartment, deleteDepartment } = require("../Controller/StaffManagement/department.controller");
const { enterSalaries, getSalaries, getSingleSalary, getSingleEmployeeSalary } = require("../Controller/StaffManagement/salary.controller");
const { leaveRequest, leaveResponse, getSingleLeave, getLeaves } = require("../Controller/StaffManagement/leave.controller");
const { markAttendance, getAllAttendance, updateAttendance } = require("../Controller/StaffManagement/attendance.controller");
const { createJob, updateJob, deleteJob, allJobs, singleJob } = require("../Controller/HiringManagement/jobOpening.controller");
const { registerCandidate, allCandidates, singleCandidate } = require("../Controller/HiringManagement/candidate.controller");
const { sheduleInterview, updateInterview, allInterviews, singleInterview } = require("../Controller/HiringManagement/interview.controller");

const router = express.Router();

router.post("/register-company", registerCompany);

router.post("/login", login);

router.get("/current-user", verifyToken, currentUser);


//staff
router.post("/add-staff",  newStaff);

router.get("/single-staff/:id", singleStaff);

router.get('/all-staff', allStaff);

router.delete("/delete-staff/:id", verifyToken, removeStaff);

router.put('/update-staff/:id', verifyToken, updateStaff);

router.post("/test", test);


//department
router.post("/add-department", registerDepartment);

router.put("/update-department", updateDepartment);

router.get("/all-departments", allDepartment);

router.delete("/delete-department", deleteDepartment);


//salaries
router.post("/add-salary", enterSalaries);

router.get("/all-salaries", getSalaries);

router.get("/single-salary/:id", getSingleSalary);

router.get("/single-employee-salary/:id", getSingleEmployeeSalary);


//leaves
router.post("/leave-request", leaveRequest);

router.post("/leave-response/:id", leaveResponse);

router.get("/single-leave/:id", getSingleLeave);

router.get("/all-leaves", getLeaves);


//attendance
router.post("/mark-attendance", markAttendance);

router.post("/get-attendance", getAllAttendance);

router.put("/update-attendance/:id", updateAttendance);


//jobOpenings
router.post("/create-job", createJob);

router.put("/update-job/:id", updateJob);

router.delete("/delete-job/:id", deleteJob);

router.get("/all-jobs", allJobs);

router.get("/single-job/:id", singleJob);


//candidate
router.post("/apply-job", registerCandidate);

router.get("/all-candidates", allCandidates);

router.get("/single-candidate/:id", singleCandidate);


//interview
router.post("/shedule-interview", sheduleInterview);

router.post("/update-interview/:id", updateInterview);

router.get("/all-interviewsata", allInterviews);

router.get("/single-interview/:id", singleInterview)



module.exports = router;