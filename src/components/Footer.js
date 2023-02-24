import { Typography, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "@mui/material";
import { Flag } from "@mui/icons-material";

const Footer = () => {
  const primaryTextStyle = {
    color: "white",
    fontSize: 12,
  };
  return (
    <Box
      sx={{
        bgcolor: "darkgray",
      }}
    >
      <Stack
        direction="column"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" color={"white"} sx={{ my: 5 }}>
          © Nintendo. Games are property of their respective owners. <br />
          Nintendo of America Inc. Headquarters are in Redmond, Washington, USA
        </Typography>
        <Stack direction="row" gap={5}>
          {links.map(({ text, link }) => (
            <Link href={link} sx={primaryTextStyle} underline='none'>
              <b>{text}</b>
            </Link>
          ))}
        </Stack>
        <Stack href="#" sx={{ my: 5 }} direction="row">
          <Flag sx={{color: 'white'}} />
          <Link href="#" sx={primaryTextStyle}>
            <b>Change region</b>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

const links = [
  { text: "Contact us", link: "#" },
  { text: "Website feedback", link: "#" },
  { text: "Terms of Use", link: "#" },
  { text: "Documents & Policies", link: "#" },
];