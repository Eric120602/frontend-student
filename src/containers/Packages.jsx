import { Box } from "@mui/material";
import ActiveSession from "../component/ActiveSession";
import ListPackages from "../component/ListPackages";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AlertScreen from "../component/AlertScreen";


const useQuery = () => new URLSearchParams(useLocation().search);

function Packages() {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertColor, setAlertColor] = useState("");

    const query = useQuery();

    useEffect(() => {
        if (query.has("payment")) {
            const paymentResult = query.get("payment")
            if (paymentResult === "success") {
                flashAlert("success", "Payment has been received successfully. You may proceed to book sessions")
            } else {
                flashAlert("error", "Payment failed")
            }
        }
    }, [])

    const flashAlert = (alertColor, alertMessage) => {
        setAlertColor(alertColor)
        setAlertMessage(alertMessage)
        setTimeout(() => {
            setAlertColor("")
            setAlertMessage("")
        }, 1500);
    }

    return (
        <Box >
            <Box sx={styles.columnsContainer}>
                <Box sx={styles.columnActive}>
                    <AlertScreen alertColor={alertColor} alertMessage={alertMessage} />
                    <ListPackages />
                </Box>
            </Box>
            <br />
            <Box sx={styles.columnsContainer}>
                <Box sx={styles.columnActive}>
                    <ActiveSession />
                </Box>
            </Box>
        </Box>
    );
}

export default Packages;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {
        display: "flex",
        align: "center",
        position: "relative",
        left: 100,
        top:25,
        
    },
    columnsActive: {
        display: "flex",
        align: "center",
        position: "relative",
        top: "10%",


    }
}
