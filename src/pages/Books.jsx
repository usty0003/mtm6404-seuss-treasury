import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

import { fetchBooks } from "../api";
import Loader from "../components/Loader";

const Books = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <Card>
            <Link to={`/book/${book.id}`} style={{ textDecoration: "none" }}>
              <CardMedia
                height="400"
                component="img"
                alt={book.title}
                image={book.image}
              />
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;