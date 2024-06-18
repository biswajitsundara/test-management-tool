import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../Store/testSlice";
import { useEffect } from "react";

export default function TestCard() {
  const dispatch = useDispatch();

  const {data, status, selectedTest} = useSelector((state) => state.tests);

  console.log(selectedTest);

  useEffect(() => {
    dispatch(getTests());
  }, []);

  const testObj = Object.keys(selectedTest);

  if (testObj.length < 1){
      return <h3>Test is yet to be selected..</h3>
  }

  return (
    <>
      {testObj.length > 1 && (
        <Card sx={{ width: 800, padding: "1rem" }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {`${selectedTest.id}.  ${selectedTest?.test_summary}`}
              <hr />
            </Typography>
  
            <Typography
              variant="h6"
              component="h2"
              style={{ paddingTop: "1rem", fontWeight: "bold" }}
            >
              Test Steps
            </Typography>
            <ul>
              {selectedTest?.test_steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
  
            <Typography
              variant="h6"
              component="h2"
              style={{ paddingTop: "1rem", fontWeight: "bold" }}
            >
              Expected Result
            </Typography>
            <p>{selectedTest?.expected_result}</p>
  
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingTop: "1rem",
                paddingBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Test Data
            </Typography>
            <ul>
              {selectedTest &&
                Object.keys(selectedTest?.test_data).map((key) => (
                  <li key={key}>{selectedTest?.test_data[key]}</li>
                ))}
            </ul>
  
            <Typography
              variant="h6"
              component="h2"
              style={{ paddingTop: "1rem", fontWeight: "bold" }}
            >
              Comments
            </Typography>
            <p>{selectedTest?.comments}</p>
          </CardContent>
        </Card>
      )}
    </>
  );
  
}
