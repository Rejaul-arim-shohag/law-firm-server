const express = require('express');
const router = express.Router();

//authentication verify middleware
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const adminVerifyMiddleware = require("../middleware/AdminVerifyMiddleware")

//controller 
const UserController = require("../controller/UserController");
const AppointmentController = require("../controller/AppointmentController")
const AppointmentServicesController = require("../controller/AppointmentServicesController");
const SlotController = require("../controller/SlotController");
const AttorneyController = require("../controller/AttorneyController");
const ServiceAreaController =require("../controller/ServiceAreaController")
const PlanController = require ("../controller/PlanController.js")
const MessageController = require("../controller/MessageController")
const UserCommentController = require("../controller/UserCommentController");
const AdminController = require("../controller/AdminController");

//admin route
router.post("/AdminRegistration",adminVerifyMiddleware, AdminController.AdminRegistration);
router.post("/AdminLogin", AdminController.AdminLogin);

//user route
router.post("/createUser", UserController.userRegistration);
router.post("/loginUser", UserController.login);
router.post("/profileUpdate",authVerifyMiddleware, UserController.profileUpdate);



//attoreny
router.post("/createAttoreny",adminVerifyMiddleware, AttorneyController.createAttoreny);
router.get("/readAttorneys", AttorneyController.readAttorneys);
router.get("/readSingleAttorney/:id",adminVerifyMiddleware, AttorneyController.readSingleAttorney);
router.post("/updateAttorney/:id",adminVerifyMiddleware, AttorneyController.updateAttorney);
router.get("/deleteAttorney/:id",adminVerifyMiddleware, AttorneyController.deleteAttorney);

//service area 
router.post("/createService",adminVerifyMiddleware, ServiceAreaController.createService);
router.get("/readServiceAreas",ServiceAreaController.readServiceAreas);
router.post("/updateServiceArea/:serviceID",adminVerifyMiddleware, ServiceAreaController.updateServiceArea);
router.get("/deleteServiceArea/:serviceID",adminVerifyMiddleware, ServiceAreaController.deleteServiceArea);
router.get("/readServiceById/:serviceID",adminVerifyMiddleware, ServiceAreaController.readServiceById);



//plan areas
router.post("/createOurPlan",adminVerifyMiddleware, PlanController.createOurPlan);
router.get("/readOurPlans", PlanController.readOurPlans);
router.post("/updateOurPlan/:PlanID",adminVerifyMiddleware, PlanController.updateOurPlan);
router.get("/deleteOurPlan/:PlanID",adminVerifyMiddleware, PlanController.deleteOurPlan);
router.get("/readPlanById/:PlanID",adminVerifyMiddleware, PlanController.readPlanById);




//Contact
router.post("/CreateMessage", MessageController.CreateMessage);
router.get("/readMessages",authVerifyMiddleware, MessageController.readMessages);
router.post("/updateMessage/:id",authVerifyMiddleware, MessageController.updateMessage);

//UserCommet
router.post("/createUserComment",UserCommentController.createUserComment);
router.get("/listCommentByStatus/:status", UserCommentController.listCommentByStatus);
router.get("/deleteComment/:id",adminVerifyMiddleware, UserCommentController.deleteComment);
router.get("/updateCommentStatus/:id/:status",adminVerifyMiddleware, UserCommentController.updateCommentStatus);







//appointment services create, and it will be create by admin
router.post("/AddAppointmentService",authVerifyMiddleware, AppointmentServicesController.AddAppointmentService);
router.get("/ReadAppointmentServices",authVerifyMiddleware, AppointmentServicesController.readAppointmentService);
router.post("/UpdateAppointmentService/:ServiceID",authVerifyMiddleware, AppointmentServicesController.updateAppointmentService);
router.get("/DeleteAppointmentService/:ServiceID",authVerifyMiddleware, AppointmentServicesController.DeleteAppointmentService);

//slot will update 
router.post("/CreateSlot",authVerifyMiddleware, SlotController.createSlot);
router.get("/ReadSlot",authVerifyMiddleware, SlotController.readSlot);
//router.post("/createAppointment",authVerifyMiddleware, AppointmentController.createAppointment);






module.exports=router;