const express = require ("express");
const {registerCompany, currentUser, login} = require("../Controller/company.controller");
const { verifyToken } = require("../Middleware/verifying");
const { addStaff, singleStaff, allStaff, removeStaff, updateStaff, test, newStaff } = require("../Controller/staff.controller");
const { registerDepartment, updateDepartment, allDepartment, deleteDepartment } = require("../Controller/department.controller");

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





module.exports = router;