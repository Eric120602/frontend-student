import { Typography, useTheme } from '@mui/material';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
function SideNav() {
    // const { collapsed } = useProSidebar();
    const theme = useTheme();
    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.medium}
    >

        <Menu>
            <MenuItem active component={<Link to="/home" />} icon={<HomeIcon />}>
                <Typography variant="body 2">Home</Typography>
            </MenuItem>
            <MenuItem active component={<Link to="/packages" />} icon={<HomeIcon />}>
                <Typography variant="body 2">Packages</Typography>
            </MenuItem>
            <MenuItem active component={<Link to="/trainer/info" />} icon={<SupervisorAccountIcon />}>
                <Typography variant="body 2">Trainer Details</Typography>
            </MenuItem>
            <MenuItem active component={<Link to="/schedule" />} icon={<AccessTimeFilledIcon />}>
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