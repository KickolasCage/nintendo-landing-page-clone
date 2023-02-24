import {
  Box,
  Card,
  TextField,
  Typography,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Link,
  AppBar,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Search,
  Favorite,
  ShoppingCart,
  Person,
  LiveHelp,
  Star,
  Games,
  Store,
  VideogameAsset,
  Article,
} from "@mui/icons-material";

import {Stack } from "@mui/system";

import Dropdown from "./components/navigation/Dropdown";
import Navigation from "./components/navigation/Navigation";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import CustomBottomNavigation from "./components/navigation/BottomNavigation";
import WebsiteLinksTable from "./components/WebsiteLinksTable";

export default function Home() {
  const featuredList = [
    {
      header: "Nintendo Switch -OLED Model Splatoon 3 Edition",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnC7-NgwrHym6Tsyy4GoOy9U-XpaEdQb7XwfsibYdXA&s",
      link: "",
    },
    {
      header: "Splatoon 3 - Expansion Pass- Available now",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnC7-NgwrHym6Tsyy4GoOy9U-XpaEdQb7XwfsibYdXA&s",
      link: "#",
    },
    {
      header: "Pikmin 4 - Pre-order now",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnC7-NgwrHym6Tsyy4GoOy9U-XpaEdQb7XwfsibYdXA&s",
      link: "#",
    },
    {
      header: "Nintendo Switch Game Vouchers - Learn more",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnC7-NgwrHym6Tsyy4GoOy9U-XpaEdQb7XwfsibYdXA&s",
      link: "#",
    },
    {
      header: "Blanc - Available now",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnC7-NgwrHym6Tsyy4GoOy9U-XpaEdQb7XwfsibYdXA&s",
      link: "#",
    },
    {
      header: "Overwatch 2: Season 3 - Free download",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnC7-NgwrHym6Tsyy4GoOy9U-XpaEdQb7XwfsibYdXA&s",
      link: "#",
    },
  ];

  const newsList = [
    { image: "", date: "", header: "", text: "" },
    { image: "", date: "", header: "", text: "" },
    { image: "", date: "", header: "", text: "" },
    { image: "", date: "", header: "", text: "" }
  ];

  return (
    <>
      <Navigation />
      <Box sx={{display: 'flex', flexDirection: "column", justifyContent:"space-evenly"}}>
        <Stack direction="row" spacing={2} overflow="scroll">
          {featuredList.map(({ header, image, link }) => (
            <Card sx={{ width: 250 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
              />
              <CardContent>
                <Link
                  underline="none"
                  href={link}
                  color="black"
                  sx={{ "&:hover": { color: "red" } }}
                >
                  {header}
                </Link>
                <Typography variant="subtitle2" component="div">
                  Nintendo Switch
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
      <Divider />      
      <NewsList newsList={newsList}/>      
      <CustomBottomNavigation/>
      {/* <FooterNavigation/> */}
      <Footer/>
    </>
  );
}
