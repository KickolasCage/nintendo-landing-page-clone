import {
  AppBar,
  Divider,
} from "@mui/material";

import Dropdown from "./Dropdown";
import Search from "./Search";

const Navigation = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <Search />
      <Divider />
      <Dropdown />
    </AppBar>
  );
};

export default Navigation;
