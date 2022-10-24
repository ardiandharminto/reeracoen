import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=vLJJ4UxhZvnhA8ctMOL8g9C4UULMrl2h`
        );
        const articles = await res.json();
        console.log(articles.results);
        setArticles(articles.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container>
      <Grid container my={1} spacing={3}>
        {articles.map((article, index) => {
          const { title, abstract } = article;
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {abstract}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default HomePage;
