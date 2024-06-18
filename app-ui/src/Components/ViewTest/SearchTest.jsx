import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getTests, setSelectedTest } from '../../Store/testSlice';

export default function SearchTest() {

  const dispatch = useDispatch();

  const {data, status} = useSelector((state) => state.tests);

  React.useEffect(() => {
    dispatch(getTests());
  }, []);

  const handleSelect = (id) =>{
    dispatch(setSelectedTest(data[id]));
  }

  const testSummaries = Object.values(data).map(test => ({ label: test.test_summary, id:test.id}));

  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={testSummaries}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Test Case" />}
      onChange={(event, value)=>handleSelect(value.id)}
    />
  );
}

