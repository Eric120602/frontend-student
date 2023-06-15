import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { createCheckoutSession, listPackages } from '../api/packages';
import { Button } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function ListPackages() {
  const [packages, setPackages] = useState([])
  useEffect(() => {
    loadPackages()
  }, [])
  const loadPackages = async () => {
    try {
      const response = await listPackages()
      setPackages(response)
    }
    catch (error) {
      console.log("An error occured while getting package list: ", error)
    }
  }

  const buyPackage = async (id) => {
    try {
      const response = await createCheckoutSession(id)
      window.location.replace(
        response.url
      );
    }
    catch (error) {
      console.log("An error occured while creating a checkout session: ", error)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Div>{"Our Packages"}</Div>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Purchase &nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packages.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align='right'><Button onClick={() => buyPackage(product.id)}>Buy</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}