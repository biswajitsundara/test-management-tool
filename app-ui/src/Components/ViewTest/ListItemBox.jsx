import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { blueGrey, green } from "@mui/material/colors";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { setSelectedTest } from "../../Store/testSlice";

export default function ListItemBox() {
  const {data:testsData, selectedPage} = useSelector((state) => state.tests);
  const dispatch = useDispatch();

 

  const allData = Object.values(testsData);


  

  let startIndex = (selectedPage - 1) * 4;
  let endIndex = startIndex + 4;
  const data = allData.slice(startIndex,endIndex);
  console.log(data);

  const handleSelectItem = (test) =>{
    dispatch(setSelectedTest(test));
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((testcase) => (
        <span key={testcase.id}>
          <ListItem alignItems="flex-start" style={{cursor:'pointer'}} onClick={()=>handleSelectItem(testcase)}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blueGrey[500] }}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary= {testcase.test_summary}
              secondary={
                <React.Fragment>
                  {`${testcase.test_steps[0]}…`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </span>
      ))}
    </List>
  );
}
