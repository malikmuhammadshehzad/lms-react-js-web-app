import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

const institutes = [
  {
    name: "Institute A",
    students: [
      {
        name: "John Doe",
        fatherName: "David Doe",
        course: "Computer Science",
        contact: "0123456789",
        cnic: "1234567890123",
        lastQualification: "Bachelor's Degree",
        section: "A",
        email: "johndoe@example.com",
        password: "password123",
        city: "New York",
        country: "USA",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        address: "123 Main St",
      },
      {
        name: "John Doe",
        fatherName: "David Doe",
        course: "Computer Science",
        contact: "0123456789",
        cnic: "1234567890123",
        lastQualification: "Bachelor's Degree",
        section: "A",
        email: "johndoe@example.com",
        password: "password123",
        city: "New York",
        country: "USA",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        address: "123 Main St",
      },
      {
        name: "John Doe",
        fatherName: "David Doe",
        course: "Computer Science", 
        contact: "0123456789",
        cnic: "1234567890123",
        lastQualification: "Bachelor's Degree",
        section: "A",
        email: "johndoe@example.com",
        password: "password123",
        city: "New York",
        country: "USA",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        address: "123 Main St",
      },
       
    ],
  },
];

function StudentList() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleClose = () => setSelectedStudent(null);

  return (

    <>
    <Box sx={{marginLeft:8, width:'1472px'}} >
    <Typography variant="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
        Institute List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {institutes.map((institute) =>
              institute.students.map((student) => (
                <TableRow
                  key={student.name}
                  onClick={() => setSelectedStudent(student)}
                >
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>{student.course}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={Boolean(selectedStudent)} onClose={handleClose}>
        {selectedStudent && (
          <>
            <DialogTitle>{selectedStudent.name}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="subtitle1">
                  Student Details
                </Typography>
                <Typography>
                  Contact: {selectedStudent.contact}
                </Typography>
                <Typography>CNIC: {selectedStudent.cnic}</Typography>
                <Typography>
                  Last Qualification: {selectedStudent.lastQualification}
                </Typography>
                <Typography>
                  Course: {selectedStudent.course}
                </Typography>
                <Typography>
                  Institute: {institutes.find((i) =>
                    i.students.includes(selectedStudent)
                  ).name}
                </Typography>
                <Typography>
                  Section: {selectedStudent.section}
                </Typography>
                <Typography>Email: {selectedStudent.email}</Typography>
                <Typography>
                  City: {selectedStudent.city}, Country:{" "}
                  {selectedStudent.country}
                </Typography>
                <Typography>
                  Date of Birth: {selectedStudent.dateOfBirth}
                </Typography>
                <Typography>Gender: {selectedStudent.gender}</Typography>
                <Typography>Address: {selectedStudent.address}</Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      </Box>
    </>
  );
}

export default StudentList;