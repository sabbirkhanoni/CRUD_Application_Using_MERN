
import express from 'express';
import {addUser, getUsers, getUser, editUser,deleteUser} from '../controller/user-controller.js';

const router = express.Router();

//addUser function is imported from controller
//addUser function help to save the data in database
router.post('/add',addUser)

//all users routes
router.get('/all',getUsers);

//edit user route
router.get('/:id',getUser);

//update user route
router.put('/:id',editUser);

//delete user route
router.delete('/:id',deleteUser);

export default router;