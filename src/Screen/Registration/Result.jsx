import React from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react';

function Result() {

    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column' ,alignItems:"center"}} >
    <Box sx={{ height:300 , width:500   , marginTop:"12px",display:'flex', flexDirection:'column' ,alignItems:"center" , justifyContent:"space-between" }}>
        <Typography variant='h2' > Result </Typography>
    <TextField sx={{width:400}} id="outlined-basic" label="Student Name" variant="outlined" />
    <FormControl fullWidth  sx={{width:400}} >
        <InputLabel id="demo-simple-select-label">course dropdown</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" > Search Result </Button>
    </Box>
    </Box>
    </>
  )
}

export default Result