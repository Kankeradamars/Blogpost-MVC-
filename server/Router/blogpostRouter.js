import express from 'express';
import blogController from '../controller/blogpostController';
import {verifyAuth} from '../middleware/AuthVerification';
const router  = express.Router();
router.post('/blogpost/createblog' ,verifyAuth,blogController.createblogpost);
router.get('/blogpost/all' ,verifyAuth,blogController.getAllBlog);
router.get('/blogpost/one/:id' ,verifyAuth,blogController.getOneBlog);
router.delete('/blogpost/deleteone/:id' ,verifyAuth,blogController.deleteOneBlog);
router.patch('/blogpost/updateOneBlog/:id' ,verifyAuth, blogController.updateOneBlog);


export default router;

