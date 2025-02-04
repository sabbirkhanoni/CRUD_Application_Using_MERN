

import { request, response } from 'express';
import User from '../schema/user-schema.js';


export const addUser = async(request,response) => {
    const user = request.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
        console.log('User Added Successfully');
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}

export const getUsers = async(request,response) => {
    try{
        const users = await User.find({}); //find all the users
        response.status(200).json(users);
    }catch(error){
        response.status(404).json({message: error.message});  
    }
}

export const getUser = async(request,response) => {
    try{
        const user = await User.find({id: request.params.id});
        response.status(200).json(user);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

export const editUser = async(request,response) => {
    const user = request.body;
    //validate the user
    const editUser = new User(user);
    try{
        await User.updateOne({id: request.params.id},editUser);
        response.status(200).json(editUser);
        console.log('User Updated Successfully');
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

export const deleteUser = async(request,response) => {
    try{
        await User.deleteOne({id: request.params.id});
        response.status(200).json('User Deleted Successfully');
    }catch(error){
        response.status(404).json({message: error.message});
    }
}
