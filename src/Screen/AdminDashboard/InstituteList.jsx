// import React from 'react'
// import { Box, Typography } from '@mui/material'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar'
 

// function createData(name, logo,   campus ,  active) {
//   return { name, logo,  campus, active };
// }

// const rows = [
//   createData(' Javan Pakistan' , 6.0, 24),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
 
// function InstituteList() {
//   return (
//     <Box  sx={{marginLeft:10}}  >
//     <Typography variant='h2' > Institute List </Typography>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 300 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell> Institute Name</TableCell>
//             <TableCell align="right">Logo</TableCell>
//             <TableCell align="right">Campus</TableCell>
//             <TableCell align="right"> Active</TableCell>
           
          
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.logo}</TableCell>
//               <TableCell align="right">{row.campus}</TableCell>
//               <TableCell align="right">{row.active}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </Box>
//   )
// }

// export default InstituteList

 
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

const institutes = [
  {
    name: "Institute 1",
    logo: "https://media.istockphoto.com/id/1330286155/vector/male-avatar-icon.jpg?s=612x612&w=0&k=20&c=MpWNcenVDPvJEeFrMqH7zd9gnAwf62MUULVY4VoiKYg=",
    campuses: 3,
    active: true,
  },
  {
    name: "Institute 2",
    logo: "https://via.placeholder.com/50",
    campuses: 2,
    active: false,
  },
  // add more institutes here
];

function InstituteList() {
  return (
    <Box sx={{marginLeft:8, width:'1472px'}} >
    <TableContainer  component={Paper}>
      <Typography variant="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
        Institute List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Logo</TableCell>
            <TableCell>No. of Campuses</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {institutes.map((institute) => (
            <TableRow key={institute.name}>
              <TableCell>{institute.name}</TableCell>
              <TableCell >
                <img  style={{
                  height:'60px',
                  width:'60px',
                  borderRadius:"15px"

                }}  src={institute.logo} alt={institute.name} />
              </TableCell>
              <TableCell>{institute.campuses}</TableCell>
              <TableCell>
                {institute.active ? (
                  <CheckCircle sx={{ color: "green" }} />
                ) : (
                  <Cancel sx={{ color: "red" }} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default InstituteList;

