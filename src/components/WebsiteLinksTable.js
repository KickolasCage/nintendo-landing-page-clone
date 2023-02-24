import { Link, Typography } from "@mui/material";
import { Stack} from "@mui/system";
import {Grid, Box} from "@mui/material";

const FooterNavigation = () => {
  

  const GridItem = (header, links) => (
    <Grid item>
      {/* <Box>
        <Typography variant='h5'> {header}</Typography>
        <Stack direction="column">
          {links.map(({ link, text }) => {
            <Link href={link}>
              <Typography>{text}</Typography>
            </Link>;
          })}
        </Stack>
      </Box> */}
        {}
    </Grid>
  );

  return <Grid container>
    {linksColumns.map(({header, link}) => <GridItem header={header} link={link}/>)}
  </Grid>;
};

export default FooterNavigation;

const linksColumns = [
  {
    header: "About Nintendo",
    links: [
      { link: "#", text: "Careers" },
      { link: "#", text: "Corporate Social Responsibility" },
    ],
  },
  {
    header: "Shop",
    links: [
      { link: "#", text: "Games" },
      { link: "#", text: "Hardware" },
      { link: "#", text: "Merchandise" },
      { link: "#", text: "Sales & deals" },
      { link: "#", text: "Exclusives" },
      { link: "#", text: "Online service" },
    ],
  },
  {
    header: "My Nintendo Store Orders",
    links: [
      { link: "#", text: "Order details" },
      { link: "#", text: "Shipping info" },
      { link: "#", text: "Returns & exchanges" },
      { link: "#", text: "FAQ" },
    ],
  },
  {
    header: "Support",
    links: [
      { link: "#", text: "Nintendo Switch" },
      { link: "#", text: "Nintendo Account" },
      { link: "#", text: "Other systems" },
      { link: "#", text: "Repairs" },
      { link: "#", text: "Nintendo product recycling" },
    ],
  },
  {
    header: "Parents",
    links: [
      { link: "#", text: "Info for parents" },
      { link: "#", text: "Parental controls" },
    ],
  },
  {
    header: "Community",
    links: [
      { link: "#", text: "Community guidelines" },
      { link: "#", text: "Online safety principles" },
    ],
  },
  {
    header: "Privacy",
    links: [
      { link: "#", text: "Privacy policy" },
      { link: "#", text: "Cookies and interest-based ads" },
    ],
  },
];