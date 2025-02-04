

//get all users so Api call is required
import { getUsers, deleteUser } from "../service/api";

//as a component deadmount is replaced by useEffect
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

//material ui components
import { Table, TableHead, TableRow, TableBody , TableCell, styled, Button} from "@mui/material";

const StyledTable = styled(Table)`
     width: 90%;
     margin: 50px auto 0 auto;
`

const StyledTableHeadRow = styled(TableRow)`
    background-color:rgb(0, 77, 63);
    & > th {
        color: #fff;
        font-size: 18px;
    }
`

const StyledTableBodyRow = styled(TableRow)`
    & > td {
        font-size: 17px;
    }
`


const AllUser = () => {

    const [users, setUsers] = useState([]); //which will store all the users

    useEffect(() => {
        getAllUsers();
    },[]);

    const getAllUsers = async() => {
        let response = await getUsers();
        setUsers(response.data); //response.data will have all the users
    }

    const deleteUserDetails = async(id) => {
        await deleteUser(id);
        //after deleting the user, we need to get all the users as Refresh
        getAllUsers();
    }



    return (
        <StyledTable>
            <TableHead>
                <StyledTableHeadRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                </StyledTableHeadRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <StyledTableBodyRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button sx={{ backgroundColor: '#004D3F' }} variant='contained' style={{marginRight: 10}} component = {Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button sx={{ backgroundColor: '#FF1911' }} variant='contained' onClick={() => deleteUserDetails(user.id)}>Delete</Button>
                            </TableCell>
                        </StyledTableBodyRow>
                    ))
                }
            </TableBody>

        </StyledTable>
    )
}

export default AllUser;