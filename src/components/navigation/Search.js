import {
  Box, TextField, Link
} from "@mui/material";
import {
  Search,
  Favorite,
  ShoppingCart,
  Person,
  LiveHelp
} from "@mui/icons-material";

import { Container, Stack } from "@mui/system";

const SearchBar = () => {
  const navigationTop = [
    { icon: <LiveHelp />, pageName: "Support" },
    { icon: <Favorite />, pageName: "Wish List" },
    { icon: <ShoppingCart />, pageName: "Cart" },
    { icon: <Person />, pageName: "Log in / Sign up" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mx: 1,
        justifyContent: "space-between",
        py: 1,
      }}
    >
      <Stack direction="row">
        <Search sx={{ color: "blue", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search games, hardware, news, etc"
          variant="standard"
          sx={{ minWidth: 270 }}
        />
      </Stack>
      <Stack direction="row">
        {navigationTop.map(({ icon, pageName }) => (
          <Link underline="none" href="#" variant="body2">
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "gray",
                "&:hover": { color: "red" },
                fontSize: 10,
              }}
            >
              {icon} {pageName}
            </Container>{" "}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default SearchBar;
