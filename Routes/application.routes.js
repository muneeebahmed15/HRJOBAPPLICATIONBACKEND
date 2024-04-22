const express = require ("express");
const { addEmployeeRecord, getEmployeeRecord, sendMail } = require("../Controller/employee.controller");
// const {  loginAdmin, recoverPassword, currentUser } = require("../Controller/company.Controller");
const { verifyToken } = require("../Middleware/verifying");



const router = express.Router();


router.post("/application-form", verifyToken, addEmployeeRecord);

router.get("/get-record", verifyToken, getEmployeeRecord);

router.post("/send-interview", verifyToken, sendMail);

// router.post("/register-admin", registerAdmin);

router.post("/login-admin", loginAdmin);

router.put("/recover-password", recoverPassword);

router.get("/current-user", verifyToken, currentUser);

module.exports = router;