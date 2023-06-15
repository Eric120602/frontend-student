import { Box } from "@mui/material";

import ListPackTable from "../component/ListPack"
function Traineehome() {
    return (
        <Box sx={styles.columnsContainer}>
            <ListPackTable />
        </Box>
    );
}

export default Traineehome;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {

        display: "flex",
        align: "center",

        position: "absolute",
        left: 280,
    }
}
