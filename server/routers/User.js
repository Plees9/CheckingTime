const express = require("express")
const { register, verify, login, logout, getProfile, updateProfile, deleteProfile, updatePassword, forgetPassword, resetPassword } = require("../controllers/User")
//const verify = require("../controllers/User")
const isAuthenticated = require("../middleware/auth")
const router = express.Router()
router.route("/register").post(register)
router.route("/verify").post(isAuthenticated, verify)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/profile").get(getProfile)
router.route("/updateprofile").delete(isAuthenticated, updateProfile)
router.route("/deleteprofile").put(deleteProfile)
router.route("/updatepassword").put(isAuthenticated, updatePassword)
router.route("/forgetpassword").post(forgetPassword)
router.route("/resetpassword").put(resetPassword)
module.exports = router