
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background-color:rgb(33, 33, 33);
    `
const ToolBar = styled(Toolbar)`
    display: flex;
    justify-content: center;
    `

const Tabs = styled(NavLink)`
    font-size: 17px;
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
    `


const NavBar = () => {
    return (
       <Header position="static">
        <ToolBar>
            <Tabs to='/'>Home</Tabs>
            <Tabs to='/add'>Add Employee</Tabs>
            <Tabs to='/all'>All Employee</Tabs>
        </ToolBar>
       </Header>
    )
}


export default NavBar;