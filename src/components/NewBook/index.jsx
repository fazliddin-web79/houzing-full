import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublicationYear] = useState("");
  const [isbn, setISBN] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const key = localStorage.getItem("key");
    const secret = localStorage.getItem("secret");
    const calculateMD5 = () => {
      return CryptoJS.MD5(
        `POST/books${JSON.stringify({
          author,
          cover,
          isbn,
          published,
          title,
        })}${secret}`
      ).toString();
    };
    const sign = calculateMD5();

    axios
      .post(
        "https://0001.uz/books",
        {
          author,
          cover,
          isbn,
          published,
          title,
        },
        {
          headers: {
            key,
            sign,
          },
        }
      )
      .then((res) =>
        toast.success(
          `Kitob muvaffaqiyatli qo'shildi. Kitob id si ${res.data.data.id}`,
          {
            position: "top-right",
            autoClose: 3000,
          }
        )
      );
  };

  return (
    <Container maxWidth="sm">
      <ToastContainer />
      <Box mt={3} mb={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Create New Book
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <TextField
            label="Author"
            variant="outlined"
            fullWidth
            margin="normal"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <TextField
            label="Publication Year"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={published}
            onChange={(e) => setPublicationYear(e.target.value)}
            required
          />

          <TextField
            label="ISBN"
            variant="outlined"
            fullWidth
            margin="normal"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
            required
          />

          <TextField
            label="Cover URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Book
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBookForm;
