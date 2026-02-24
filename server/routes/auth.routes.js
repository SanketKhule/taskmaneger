const { singin, registerEmployee, signout, sendOtp, verifyOtp, forgetPassword, changePassword } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/singin", singin)
    .post("/register-employee", registerEmployee)
    .post("/signout", signout)
    .post("/send-otp", sendOtp)
    .post("/verify-otp", verifyOtp)
    .post("/forget-password", forgetPassword)
    .post("/change-password", changePassword)

    module.exports = router;