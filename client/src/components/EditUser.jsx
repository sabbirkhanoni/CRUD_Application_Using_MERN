

import { useState, useEffect } from "react";

import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

//api
import { editUser, getUser } from "../service/api.js";

const FormContainer = styled(FormGroup)`
    margin: 5% auto 0 auto;
    width: 50%;
    & > div {
        margin: 10px;
    }
`
const defaultUser = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {   //functional component

    const [user, setUser] = useState(defaultUser);

    //helps to navigate to the different pages
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const loadUserDetails = async() => {
            const response = await getUser(id);
            setUser(response.data[0]);
        };

        loadUserDetails();
    }, [id]);

    // const loadUserDetails = async() => {
    //     const response = await getUser(id);
    //     setUser(response.data[0]);
    // };

    const getInputValue = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const editUserDetails = async() => {
        //call the api to add the user
        //before calling the api, we need to create the api into the services folder

        await editUser(user,id);
        navigate('/all');

    }

    return (
        <FormContainer>
            <Typography sx={{ backgroundColor: '#004D3F', color: '#ffffff', textAlign: 'center'}} variant='h5'>Edit Employees Information</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="name" value={user.name}/>
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="username" value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="email" value={user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="phone" value={user.phone}/>
            </FormControl>

            <FormControl>
                <Button variant='contained' sx={{ backgroundColor: '#004D3F' }} onClick={() => editUserDetails()}>Edit Employee</Button>
            </FormControl>

        </FormContainer>
    )
}

export default EditUser;