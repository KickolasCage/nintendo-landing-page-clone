import { BottomNavigationAction, BottomNavigation, Box } from "@mui/material";
import {
  Favorite,
  Menu,
  ShoppingCart,
  Person,
  Search,
  AttractionsSharp,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const CustomBottomNavigation = () => {
  const diameter = "50px";

//   const SearchContainer = styled(box)(({ theme }) => ({
//     borderRadius: "100%",
//     bgcolor: "red",
//     width: diameter,
//     height: diameter,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//     transform: "scale(1.25) translate(0px, -10px)",
//   }));

  const CustomSearch = () => (
    <Box
      sx={{
        borderRadius: "100%",
        bgcolor: "red",
        width: diameter,
        height: diameter,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        transform: "scale(1.25) translate(0px, -8px)",
      }}
      md={{
        display: "none"
      }}
    >
      <Search sx={{ color: "white" }} fontSize="large" />
    </Box>
  );

  const actions = [
    { icon: <Menu />, value: "" },
    { icon: <Favorite />, value: "" },
    { icon: <CustomSearch />, value: "" },
    { icon: <ShoppingCart />, value: "" },
    { icon: <Person />, value: "" },
  ];

  return (
    <Box
      sx={{
        borderRadius: "20% ",
        position: "relative",
        boxShadow: 2,
        width: "25wh",
        position: "fixed",
        bottom: "10vh",
        left: "25vh",        
      }}
    >
      <BottomNavigation>
        {actions.map(({ icon, value }) => (
          <BottomNavigationAction value={value} icon={icon} />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default CustomBottomNavigation;
