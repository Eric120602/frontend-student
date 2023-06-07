import {AppBar,IconButton,Toolbar,Box, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useProSidebar} from "react-pro-sidebar";
import LogoutIcon from '@mui/icons-material/Logout';
function AppHeader() {
    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
    return (  
        <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar >
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                <MenuIcon />
            </IconButton>
            <Box
                component={'img'}
                sx={styles.appLogo}
                src="/src/assets/Easy_clutch.png" />

            <Box sx={{ flexGrow: 1 }} />
            <IconButton title="Sign Out" color="secondary">
                <Typography>Logout</Typography>
                <LogoutIcon />
                
            </IconButton>
            
        </Toolbar>
    </AppBar>);
    
}
/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius: 2,
        width: 120,
        height: 50,
        marginLeft: 2,
        cursor: 'pointer'
    }
}


export default AppHeader;