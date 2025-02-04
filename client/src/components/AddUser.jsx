
import { useState } from "react";

import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//api
import { addUser } from "../service/api.js";

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

const AddUser = () => {   //functional component

    const [user, setUser] = useState({defaultUser});

    //helps to navigate to the different pages
    const navigate = useNavigate();

    const getInputValue = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const addUserDetails = async() => {
        //call the api to add the user
        //before calling the api, we need to create the api into the services folder

        await addUser(user);
        navigate('/all');

    }

    return (
        <FormContainer>
            <Typography sx={{ backgroundColor: '#004D3F', color: '#ffffff', textAlign: 'center'}} variant='h5'>Add Employees Information</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="name"/>
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="username"/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="email"/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input type='text' onChange={(e) => getInputValue(e)} name="phone"/>
            </FormControl>

            <FormControl>
                <Button variant='contained' sx={{ backgroundColor: '#004D3F' }} onClick={() => addUserDetails()}>Add Employee</Button>
            </FormControl>

        </FormContainer>
    )
}

export default AddUser;