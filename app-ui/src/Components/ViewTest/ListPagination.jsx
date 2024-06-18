import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "../../Store/testSlice";

export default function ListPagination() {
  const { data } = useSelector((state) => state.tests);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const dataLength = Object.keys(data);
  const pageCount = Math.ceil(dataLength.length / 4);

  const handleChange = (e, p) => {
    setPage(p);
    dispatch(setSelectedPage(p));
  };

  return (
    pageCount > 1 && (
      <Stack spacing={pageCount} style={{ paddingTop: "1rem" }}>
        <Pagination
          count={pageCount}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    )
  );
}
