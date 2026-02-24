require("dotenv").config({path: "./../.env"})
const mongoose = require("mongoose")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

exports.sedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected")
        const result = await User.findOne({role: "admin"})
        if(result) {
            console.log("Admin already exists")
            process.exit(1)
        }
        const hash =await bcrypt.hash("admin123", 10)
        await User.create({
            name: "Admin",
            email: "admim@gmail.com",
            password: hash,
            mobile: "1234567890",
            role: "admin"
        })
        console.log("Admin Seed Complete")
        process.exit(1)
        
    } catch (error) {
        console.error("Error seeding admin:", error)
        process.exit(1)
    }
}
