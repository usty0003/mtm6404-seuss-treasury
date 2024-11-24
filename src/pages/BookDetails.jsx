import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";

import { fetchBookDetails } from "../api";
import Loader from "../components/Loader";

const BookDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails(id)
      .then((data) => setBook(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={book.image}
              alt={book.title}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {book.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookDetails;