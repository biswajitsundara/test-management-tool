import { Stack, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Textarea from "./TextArea";
import Button from "@mui/material/Button";

function CreateTest() {
  return (
    <>
      <Typography variant="h5" component="h2">
        Create Tests
      </Typography>
      <br />
      <TextField
        fullWidth
        id="fullWidth"
        label="Test Summary"
        variant="outlined"
      />
      <br /> <br />
      <Textarea fullWidth placeholder={"Test Steps"}/>
      <br /> <br />
      <Textarea fullWidth placeholder={"Test Data"} />
      <br /> <br />
      <Textarea fullWidth placeholder={"Expected Result"} />
      <br /> <br />
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Save</Button>
        <Button variant="outlined" color="error">
          Reset
        </Button>
      </Stack>
    </>
  );
}

export default CreateTest;
