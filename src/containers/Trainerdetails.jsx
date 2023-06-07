import { Typography,Box } from "@mui/material";

//import MaterialTable from "@mui/material/Table";

function Trainerdetails() {
    return (
      <Box sx={styles.details}>
        <Typography>
        <ul type='square'>
        <li>Name: Xavier Ittan</li>
        <li>Address: Newton Rd, mamalassery</li>
        <li>Ph No: 9966106433</li>
        <li>Licence no:KL17 20210002419</li>
        </ul>
       
        <u>Proffesional Summary<br/><br/></u>
        Experienced, officially certified driving instructor. Excellent driver with great safety record.<br/>
         Encyclopedic knowledge of traffic rules. Deeply familiar with local testing requirements.<br/>
        One of the highest first-time pass rates in the area.<br/>
<br/>
        <u>Skills<br/></u>
        <ul>
        <li>Experienced, skillful, and safe driver</li>
        <li>Excellent communicator and instructor</li>
        <li>Great at conveying ideas and facts</li>
        <li>Adept at working with people of all backgrounds, personalities, and skill levels </li>
        <li>Patient and dedicated to helping students perfect their skills</li>
        <li>Always friendly and professional</li>
      </ul>
      <u>Education<br/></u>
      <ul>
        <li>Driving Instructor Certificate 2007</li>
        <li>National institute for automobile mechanics 2005</li>
        <li>American drivers associate 2009 </li>
      </ul>
      <u>Work Experience<br/></u>
      <ul>
        <li>Driver instructor at Motorque racing center 2008-11</li>
        <li>Driver instructor at Rani driving school 2015-present</li>
      </ul>
        </Typography>
        </Box>
      );
}

export default Trainerdetails;
/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  details: {
      display:"flex",
      position:"absolute",
      left:280,

  }}