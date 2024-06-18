import ListItemBox from "./ListItemBox";
import SearchTest from "./SearchTest";
import TestCard from "./TestCard";
import ListPagination from "./ListPagination";

function ViewTest() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ paddingLeft: "2rem" }}>
            <SearchTest />
          </div>
          <ListItemBox />
          <ListPagination />
        </div>
        <TestCard />
      </div>
    </>
  );
}

export default ViewTest;
