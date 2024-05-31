import { Router } from "express";
import {
  loginFaculty,
  forgotPassword,
  validateOTP,
  setNewPassword,
  getClasses,
  studentsByClass,
  getStudent,
  updatePersonalDetails,
  updateProfilePicture,
  downloadStudentData,
  mailStudentsOfClass,
  uploadMarks,
  filteredStudentData,
} from "../Controllers/facultyController.js";
import { verifyJWT } from "../Middlewares/authFaculty.js";
import { upload } from "../Middlewares/multer.js";

const router = Router();

router.route("/login").post(loginFaculty);
router.route("/updatePersonalDetails").post(verifyJWT, updatePersonalDetails);
router.route("/forgotpassword").post(forgotPassword);
router.route("/validateotp").post(validateOTP);
router.route("/setnewpassword").post(verifyJWT, setNewPassword);
router.route("/getclasses").get(verifyJWT, getClasses);
router.route("/studentsbyclass").get(verifyJWT, studentsByClass);
router.route("/getstudent").get(verifyJWT, getStudent);
router.route("/mailstudents").post(verifyJWT, mailStudentsOfClass);
router
  .route("/updateProfilePicture")
  .post(verifyJWT, upload.single("profile_pic"), updateProfilePicture);
router.route("/downloadStudentData").get(verifyJWT, downloadStudentData);
router
  .route("/uploadMSTMarks")
  .post(verifyJWT, upload.single("excel_file"), uploadMarks);
router.route("/filteredStudentData").get(verifyJWT, filteredStudentData);

export default router;
