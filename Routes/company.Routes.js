const express = require ("express");
const {registerCompany, currentUser, login} = require("../Controller/company.controller");
const { verifyToken } = require("../Middleware/verifying");
const { addStaff, singleStaff, allStaff, removeStaff, updateStaff, test, newStaff } = require("../Controller/staff.controller");
const { registerDepartment, updateDepartment, allDepartment, deleteDepartment } = require("../Controller/department.controller");
const { enterSalaries, getSalaries, getSingleSalary, getSingleEmployeeSalary } = require("../Controller/salary.controller");
const { leaveRequest, leaveResponse, getSingleLeave, getLeaves } = require("../Controller/leave.controller");
const { markAttendance, getAllAttendance, updateAttendance } = require("../Controller/attendance.controller");

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





module.exports = router;