import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { getListpack } from '../api/users';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function ListPackTable() {
  const [packs, setPacks] = useState([])
  useEffect(() => {
    loadpacks()
  }, [])
  const loadpacks = async () => {
    try {
      const response = await getListpack()
      setPacks(response)

    }
    catch (error) {
      console.log("An error occured", error)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Div>{"Buy Packages"}</Div>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Purchase &nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packs.map((pack) => (
            <TableRow
              key={pack.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {pack.name}</TableCell>
              <TableCell align="right">{pack.price}</TableCell>
              <TableCell align="right"><Link to='/Home/buypack'><button>Buy</button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}