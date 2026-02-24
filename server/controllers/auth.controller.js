exports.singin = async (req, res) => {
    try {
        res.status(200).json({ message: "Sign In" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })


    }
}
exports.registerEmployee = async (req, res) => {
    try {
        res.status(200).json({ message: "Register Employee" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Register Employee Error" })


    }
}
exports.signout = async (req, res) => {
    try {
        res.status(200).json({ message: "Sign Out" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Sign Out Error" })


    }
}
exports.sendOtp = async (req, res) => {
    try {
        res.status(200).json({ message: "Send OTP" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Send OTP Error" })


    }
}

exports.verifyOtp = async (req, res) => {
    try {
        res.status(200).json({ message: "Verify OTP" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Verify OTP Error" })


    }
}
exports.forgetPassword = async (req, res) => {
    try {
        res.status(200).json({ message: "Forget Password" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Forget Password Error" })


    }
}
exports.changePassword = async (req, res) => {
    try {
        res.status(200).json({ message: "Change Password" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Change Password Error" })


    }
}