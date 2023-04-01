import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function InstituteForm() {
  const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const [name, setName] = useState("");
  const [shortname, setShortName] = useState("");
  const [img, setImage] = useState("");
  const [campus, setCampus] = useState("");
  const [campusName, setCampusName] = useState("");
  const [campusContact, setCampusContact] = useState("");
  const [campusAddress, setCampusAddress] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [ownerContact, setOwnerContact] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [email, setEmail] = useState("");
  console.log(email);

  const submitData = () => {
    let obj = {
      name,
      email: email,
      shortname: shortname,
      campus: campus,
      img: img,
      campusDetails: [
        {
          campusName: campusName,
          campusContact: campusContact,
          campusAddress: campusAddress,
        },
      ],
      location: location,
      contact: contact,
      ownerContact: ownerContact,
      ownerEmail: ownerEmail,
    };
    
    console.log("New obj:", obj);
    console.log("email:", obj.email);

  };

  return (
    <>
      <Box sx={{ marginLeft: 12 }}>
        <Typography variant="h3"> InstituteForm </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 900,
            height: 550,
          }}
        >
          <Box
            className="Left-Side"
            sx={{
              width: 400,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              height: 550,
            }}
          >
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="outlined-basic"
              label="Institute name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setShortName(e.target.value)}
              value={shortname}
              id="outlined-basic"
              label="Institute short name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              value={img}
              id="outlined-basic"
              label="image"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setCampus(e.target.value)}
              value={campus}
              id="outlined-basic"
              label="No of campus"
              variant="outlined"
              type="number"
            />
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                height: 250,
              }}
            >
              <Typography variant="h4"> Campus detail </Typography>
              <TextField
                onChange={(e) => setCampusName(e.target.value)}
                value={campusName}
                id="outlined-basic"
                label="Institute name"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setCampusContact(e.target.value)}
                value={campusContact}
                id="outlined-basic"
                label="Contact"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setCampusAddress(e.target.value)}
                value={campusAddress}
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box
            className="Left-Side"
            sx={{
              width: 400,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              height: 550,
            }}
          >
            <TextField
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              id="outlined-basic"
              label="Contact"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setOwnerContact(e.target.value)}
              value={ownerContact}
              id="outlined-basic"
              label="Owner Contact"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setOwnerEmail(e.target.value)}
              value={ownerEmail}
              id="outlined-basic"
              label="Owner Email"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {" "}
                  institute Type
                </InputLabel>
                <Select
                  onChange={(e) => setAge(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  //  onChange={handleChange}
                >
                  <MenuItem value={10}>School</MenuItem>
                  <MenuItem value={20}>College</MenuItem>
                  <MenuItem value={30}>University</MenuItem>
                  <MenuItem value={40}>Institute</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Button variant="contained" onClick={submitData}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default InstituteForm;
