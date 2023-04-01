import React from 'react'
import { Box, Button, TextField, Typography, duration } from '@mui/material'
import { useState } from 'react';
  

   

function CourseForm() {

  const submitData=()=>{
    let object ={
      name:name,
      duration:duration,
      fees:fees,
      teacher:teacher
    }
    console.log( ' Course List ', object)
  }


  const [name, setCourseName] = useState("");
  const [duration, setDuration] = useState("");
  const [fees, setFees] = useState("");
  const [teacher, setTeacher] = useState("");
  // console.log(name)
 
  return (
    <Box sx={{marginLeft:12 ,  textAlign: "center"  }}  >
    <Typography variant='h1' >Course Form  </Typography>
    <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                height: 250,
                width:350  , marginLeft:67, marginBottom:2
              
              }}
            >
              
              <TextField
                onChange={(e) => setCourseName(e.target.value)}
                value={name}
                id="outlined-basic"
                label= " Course name"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                id="outlined-basic"
                label="Duration"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                id="outlined-basic"
                label="Fees"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setTeacher(e.target.value)}
                value={teacher}
                id="outlined-basic"
                label="Teacher"
                variant="outlined"
              />
            </Box>
            <Button variant="contained" onClick={submitData}>
          Submit
        </Button>
  </Box>
  )
}

export default CourseForm