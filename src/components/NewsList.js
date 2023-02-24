import { Card, CardContent, CardMedia, Typography, Link, Box } from "@mui/material";

const News = ({ image, date, header, text }) => {
  return (
    <Card>
      <CardMedia image={image} />
      <CardContent>
        <Typography>{date}</Typography>
        <Typography>{header}</Typography>
        <Typography>{text}</Typography>
      </CardContent>
      <CardContent>
        <Link color="red">Read More</Link>
      </CardContent>
    </Card>
  );
};

const NewsList = (newsList) => {
    console.log(newsList)
  return (
    <Box>
      {/* {newsList.map((news) => (
        <News {...news}></News>
      ))} */}
    </Box>
  );
};

export default NewsList;
