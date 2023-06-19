import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { trainerDetails } from '../api/users';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  export default function ListTrainers() {

    const [trainers, setTrainers] = useState([])
    
    useEffect(() => {
      listTrainers()
    }, [])

    const listTrainers = async () => {
        try {
          const response = await trainerDetails()
          setTrainers(response)
        }
        catch (error) {
          console.log("An error occured while getting package list: ", error)
        }
      }

  return (
    <TableContainer component={Paper}>
      <Div>{"Our Trainers"}</Div>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align='left'>Firstname</TableCell>
            <TableCell align='left'>lastname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainers.map((trainer,index) => (
            <TableRow
              key={trainer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="left">{trainer.firstname}</TableCell>
              <TableCell align="left">{trainer.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}