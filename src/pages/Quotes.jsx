import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Box, Typography, Container } from "@mui/material";

import { fetchQuotes } from "../api";
import Loader from "../components/Loader";

const QuotesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes()
      .then((data) => {
        const randomQuotes = getRandomQuotes(data, 10);
        setQuotes(randomQuotes);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  const getRandomQuotes = (quotes, count) => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  if (isLoading) return <Loader />;

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Random Quotes
      </Typography>

      <Grid container spacing={4}>
        {quotes.map((quote) => (
          <Grid item xs={12} sm={6} md={4} key={quote.id}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center"
                }}
              >
                <Box sx={{ fontSize: 24, fontStyle: "italic", color: "gray" }}>
                  &ldquo;{quote.text}&rdquo;
                </Box>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  - {quote.book.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QuotesPage;