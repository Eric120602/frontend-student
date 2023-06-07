import {Box, Typography,useTheme} from '@mui/material';
import {Menu,MenuItem,Sidebar,useProSidebar} from "react-pro-sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from "react-router-dom";
function SideNav() {
    const {collapsed} = useProSidebar();
    const theme=useTheme();
    return <Sidebar
    style={{ height: "100%", top: 'auto' }}
    breakPoint="md"
    backgroundColor={theme.palette.neutral.medium}
    >
        
        <Menu>
        <MenuItem active component={<Link to="/Home"/>}icon={<HomeIcon/>}>
                <Typography variant="body 2">Home</Typography>
            </MenuItem>
            {/* <MenuItem active component={<Link to="/Learnerdetails"/>}icon={<AccountCircleIcon/>}>
                <Typography variant="body 2">Learner Details</Typography>
            </MenuItem> */}
            <MenuItem active component={<Link to="/Trainerdetails"/>} icon={<SupervisorAccountIcon/>}>
                <Typography variant="body 2">Trainer Details</Typography>
            </MenuItem>
            
            <MenuItem active component={<Link to="/Schedule"/>} icon={<AccessTimeFilledIcon/>}>
                <Typography variant="body 2">Schedule</Typography>
            </MenuItem>
            
        
        </Menu>
    </Sidebar>

}

export default SideNav;

/** @type {import("@mui/material").SxProps}*/
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 9
    },
    yourChannel: {
        mt: 9
        
    }

}