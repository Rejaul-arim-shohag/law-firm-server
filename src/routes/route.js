const express = require('express');
const router = express.Router();

//authentication verify middleware
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const adminVerifyMiddleware = require("../middleware/AdminVerifyMiddleware")

//controller 
const UserController = require("../controller/UserController");
const AppointmentController = require("../controller/AppointmentController")
const SlotController = require("../controller/SlotController");
const AttorneyController = require("../controller/AttorneyController");
const ServiceAreaController =require("../controller/ServiceAreaController")
const PlanController = require ("../controller/PlanController.js")
const MessageController = require("../controller/MessageController")
const UserCommentController = require("../controller/UserCommentController");
const AdminController = require("../controller/AdminController");
const whyChoiceUsController = require("../controller/WhyChoiceUsController")
const portfolioController = require ("../controller/portfolioController")
const blogController = require ("../controller/blogController")
const blogCommentController = require ("../controller/blogCommentController")
const footerController = require ("../controller/FooterController")
const settingsController = require ("../controller/settingsController")
const termsAndPrivacyController=require("../controller/termsAndPrivecyController")
//admin route
router.post("/AdminRegistration",adminVerifyMiddleware, AdminController.AdminRegistration);
router.post("/AdminLogin", AdminController.AdminLogin);
router.get("/AdminProfileDetails",adminVerifyMiddleware, AdminController.AdminProfileDetails);
router.post("/updateAdminProfile",adminVerifyMiddleware, AdminController.updateAdminProfile);


router.get("/RecoverVerifyEmail/:email", AdminController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", AdminController.RecoverVerifyOTP);
router.post("/RecoverResetPass", AdminController.RecoverResetPass);

//setting controllers, slot
//logo
router.post("/insertLogo",adminVerifyMiddleware, settingsController.insertLogo);
router.get("/readLogo", settingsController.findLogo);
router.get("/DeleteLogo/:id",adminVerifyMiddleware, settingsController.deleteLogo);
//heroImage 
router.post("/insertHeroImage",adminVerifyMiddleware, settingsController.insertHeroImage);
router.get("/findHeroImage", settingsController.findHeroImage);
router.get("/deleteHeroImage/:id",adminVerifyMiddleware, settingsController.deleteHeroImage);
// address
router.post("/insertAddress",adminVerifyMiddleware, settingsController.insertAddress);
router.get("/deleteAddress/:id",adminVerifyMiddleware, settingsController.deleteAddress);
router.post("/updateAddress/:id",adminVerifyMiddleware, settingsController.updateAddress);
router.get("/FindAddress", settingsController.FindAddress);

//hero content
router.post("/insertHeroContent",adminVerifyMiddleware, settingsController.insertHeroContent);
router.get("/deleteHeroContent/:id",adminVerifyMiddleware, settingsController.deleteHeroContent);
router.get("/findHeroContent", settingsController.findHeroContent);

//terms and condition
router.post("/createTerms",adminVerifyMiddleware, termsAndPrivacyController.createTerms);
router.get("/deleteTerms/:id",adminVerifyMiddleware, termsAndPrivacyController.deleteTerms);
router.get("/readTerms", termsAndPrivacyController.readTerms);
router.post("/updateTerms/:id",adminVerifyMiddleware, termsAndPrivacyController.updateTerms);

//privacy
router.post("/createPrivacy",adminVerifyMiddleware, termsAndPrivacyController.createPrivacy);
router.get("/deletePrivacy/:id",adminVerifyMiddleware, termsAndPrivacyController.deletePrivacy);
router.get("/readPrivacy", termsAndPrivacyController.readPrivacy);
router.post("/updatePrivacy/:id",adminVerifyMiddleware, termsAndPrivacyController.updatePrivacy);


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
router.get("/readServiceById/:serviceID",ServiceAreaController.readServiceById);

//plan areas
router.post("/createOurPlan",adminVerifyMiddleware, PlanController.createOurPlan);
router.get("/readOurPlans", PlanController.readOurPlans);
router.post("/updateOurPlan/:PlanID",adminVerifyMiddleware, PlanController.updateOurPlan);
router.get("/deleteOurPlan/:PlanID",adminVerifyMiddleware, PlanController.deleteOurPlan);
router.get("/readPlanById/:PlanID",PlanController.readPlanById);


//Contact
router.post("/CreateMessage", MessageController.CreateMessage);
router.get("/readMessages",authVerifyMiddleware, MessageController.readMessages);
router.post("/updateMessage/:id",authVerifyMiddleware, MessageController.updateMessage);

//UserCommet
router.post("/createUserComment",UserCommentController.createUserComment);
router.get("/listCommentByStatus/:status", UserCommentController.listCommentByStatus);
router.get("/deleteComment/:id",adminVerifyMiddleware, UserCommentController.deleteComment);
router.get("/updateCommentStatus/:id/:status",adminVerifyMiddleware, UserCommentController.updateCommentStatus);

//why choice us 
router.post("/createChoiceUsItem",adminVerifyMiddleware, whyChoiceUsController.createChoiceUsItem);
router.get("/readChoiceUsItem", whyChoiceUsController.readChoiceUsItems);
router.get("/singleChoiceUsItem/:id",adminVerifyMiddleware, whyChoiceUsController.singleChoiceUsItem);
router.post("/updateChoiceUsItem/:id",adminVerifyMiddleware, whyChoiceUsController.updateChoiceUsItem);
router.get("/deleteChoiceUsItem/:id",adminVerifyMiddleware, whyChoiceUsController.deleteChoiceUsItem);

//hero portfolio image add 
router.post("/insertPortfolio",adminVerifyMiddleware, portfolioController.createPortfolio);
router.get("/portfolioList", portfolioController.portfolioList);
router.get("/readSinglePortfolio/:id",adminVerifyMiddleware, portfolioController.readSinglePortfolioItem);
router.post("/updatePortfolio/:id",adminVerifyMiddleware, portfolioController.updatePortfolioItem);
router.get("/deletePortfolio/:id",adminVerifyMiddleware, portfolioController.deletePortfolioItem);

//blog 
router.post("/createBlog",adminVerifyMiddleware, blogController.createBlog);
router.get("/readBlogList", blogController.readBlogList);
router.get("/readSingleBlog/:id", blogController.readSingleBlog);
router.post("/updateBlog/:id",adminVerifyMiddleware, blogController.updateBlog);
router.get("/deleteBlog/:id",adminVerifyMiddleware, blogController.deleteBlog);

//blog Comment
router.post("/createBlogComment", blogCommentController.createBlogComment);

//footer 
router.post("/createLegalService",adminVerifyMiddleware,footerController.createFooterLegalService);
router.get("/readFooterLegalService",footerController.readFooterLegalService);
router.get("/singleLegalService/:id",adminVerifyMiddleware,footerController.singleLegalService);
router.post("/updateLegalService/:id",adminVerifyMiddleware,footerController.updateLegalService);
router.get("/deleteLegalService/:id",adminVerifyMiddleware,footerController.deleteLegalService);

//slot will update 
router.post("/CreateSlot",adminVerifyMiddleware, SlotController.createSlot);
router.get("/ReadSlot", SlotController.readSlot);
router.get("/deleteSlot/:id",adminVerifyMiddleware, SlotController.deleteSlot);

//appointment 
router.post("/createAppointment", AppointmentController.createAppointment);
router.get("/readAppointmentList/:status", AppointmentController.readAppointmentList);
router.post("/updateAppointment/:id",adminVerifyMiddleware, AppointmentController.updateAppointment);
router.get("/deleteAppointment/:id",adminVerifyMiddleware, AppointmentController.deleteAppointment);

// router.get("/ProductList/:pageNo/:perPage/:searchKeyword?",ProductsController.ProductList);
router.post("/readAppointment/:pageNo/:parPage/:status", AppointmentController.readAppointment);




module.exports=router;