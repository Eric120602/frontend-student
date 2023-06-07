import { Typography,Box } from "@mui/material";
import MyCalendar from "../component/MyCalendar";
function Timeschedule() {
    return ( 
        
        <Typography>
            <Box sx={styles.details}>
            <MyCalendar/>
            </Box>
        </Typography>
     );
}

export default Timeschedule;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    details: {
        display:"grid",
        position:"absolute",
        left:280,
        height:"95vh",
         width:"70vw",
  
    }}