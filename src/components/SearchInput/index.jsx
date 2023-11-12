import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ onChange, placeholder, handleKeyPress }) => {
  return (
    <TextField
      label="Search"
      placeholder={placeholder}
      onKeyDown={handleKeyPress}
      onChange={onChange}
      variant="outlined"
      InputProps={{
        startAdornment: <SearchIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />,
      }}
      fullWidth
    />
  );
};

export default SearchInput;
