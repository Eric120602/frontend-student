import { Typography,Box } from "@mui/material";
// import Dropdown from "../component/Packreq";
import ListPackTable from "../component/ListPack"
function Home() {
    return (  
        <Box sx={styles.columnsContainer}>
            <ListPackTable/>
        {/* <Dropdown/> */}
        </Box>
    );
}

export default Home;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {
       
        display:"flex",
        align:"center",
    
        position:"absolute",
        left:280,
    }}
