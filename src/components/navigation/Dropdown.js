import {
  Star,
  Games,
  Store,
  VideogameAsset,
  Article,
  Campaign,
  CalendarMonth,
  EscalatorWarning,
  People,
  Cancel,
  OnlinePrediction,
  Earbuds,
  Shop,
} from "@mui/icons-material";

import Collapse from "@mui/material/Collapse";

import {
  Grid,
  Tab,
  Tabs,
  Typography,
  Stack,
  Link,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import { Box } from "@mui/system";

const Collapsible = ({ value, currentValue, element }) => {
  return <Collapse in={value == currentValue}>{element}</Collapse>;
};

const NintendoStoreTab = (setTabValue) => {
  const gridItems = [
    ["Games", "Nintendo Switch games", "Sales & deals"],
    [
      "Hardware",
      "Nintendo Switch systems",
      "Joy-con & controllers",
      "Cases & more",
    ],
    ["Merchandise", "Apparel & accessories", "Home & office", "Plush", "Toys"],
    [
      "Store exlusives",
      "Exclusive products",
      "My Nintendo rewards",
      "Nintendo Switch Online offers",
    ],
    [
      "Characters",
      "Animal Crossing",
      "Splatoon",
      "Mario",
      "The Legend of Zelda",
    ],
    ["Sales & deals"],
  ];

  const NintendoStoreGrid = () => (
    <Stack gap={8} direction="row" sx={{ mx: 2, my: 1 }}>
      {gridItems.map((items) => (
        <Stack direction="column">
          {items.map((item) => (
            <Link href="#" color="gray" underline="none">
              {item}
            </Link>
          ))}
        </Stack>
      ))}
    </Stack>
  );

  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: 2,
        alignItems: "center",                
      }}
    >
      <Box
        sx={{
          bgcolor: "red",
          textAlign: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <Typography variant="h5" sx={{ py: 3 }}>
          My Nintendo Store
        </Typography>
        <Cancel
          color="disabled"
          sx={{
            position: "absolute",
            right: "1%",
            top: "10%",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setTabValue(-1)}
        />
      </Box>
      <NintendoStoreGrid />
      <Button variant="outlined" color="error" sx={{ width: 200, my: 2 }}>
        Shop all
      </Button>
    </Box>
  );
};

const GenericNavigationTab = ({ tabs }) => {
  return (
    <Tabs centered sx={{ my: 1.25 }}>
      {tabs.map(({ icon, text }) => {
        const BoxIcon = () => (
          <Box
            sx={{
              width: 30,
              height: 30,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid grey",
            }}
          >
            {icon}
          </Box>
        );
        return (
          <Tab
            icon={<BoxIcon />}
            label={text}
            sx={{ fontSize: "10px", "&:hover": { color: "red" } }}
          />
        );
      })}
    </Tabs>
  );
};

const gameTabsItems = [
  { icon: <Games />, text: "Nintendo Switch games" },
  { icon: <Campaign />, text: "New releases" },
  { icon: <CalendarMonth />, text: "Coming soon" },
  { icon: <Games />, text: "Shop games" },
];

const playNintendoTabItems = [
  { icon: <EscalatorWarning />, text: "For kids" },
  { icon: <People />, text: "For parents" },
];

const forKidsParentsTabItems = [
  { icon: <EscalatorWarning />, text: "Nintendo Switch Lineup" },
  { icon: <Games />, text: "Compare systems" },
  { icon: <OnlinePrediction />, text: "Online service" },
  { icon: <Earbuds />, text: "Accessories" },
  { icon: <Shop />, text: "Shop systems" },
];

const GamesTab = () => <GenericNavigationTab tabs={gameTabsItems} />;
const PlayNintendoTab = () => (
  <GenericNavigationTab tabs={playNintendoTabItems} />
);
const ForKidsParentsTab = () => (
  <GenericNavigationTab tabs={forKidsParentsTabItems} />
);

const Dropdown = () => {
  const [value, setValue] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => console.log("it changed!"), [value]);

  const navigationBottom = [
    { icon: <Store />, text: "My Nintendo Store" },
    { icon: <Games />, text: "Games" },
    { icon: <VideogameAsset />, text: "Nintendo Switch" },
    { icon: <Article />, text: "News & Events" },
    { icon: <Star />, text: "Play Nintendo" },
  ];

  const tabs = [
    <NintendoStoreTab changeTabValue={(value) => setValue(value)} />,
    <GamesTab />,
    <PlayNintendoTab />,
    "",
    <ForKidsParentsTab />,
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mx: 1,
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          {navigationBottom.map(({ icon, text }) => (
            <Tab
              sx={{ fontSize: 10 }}
              icon={icon}
              label={text}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, ind) =>
        ind == 3 ? (
          ""
        ) : (
          <Collapsible value={ind} currentValue={value} element={tab} />
        )
      )}
    </>
  );
};

export default Dropdown;
