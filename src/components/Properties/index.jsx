import React, { useEffect, useState } from "react";
import CardCon from "../Card";
import { Container, Oops, PagenationWrapper, SearchWrap } from "./style";
import CryptoJS from "crypto-js";
import axios from "axios";
import Loading from "../loading";
import oops from "./../../assets/img/oops.jfif";
import { Pagination, PaginationItem } from "@mui/material";
import SearchInput from "../SearchInput";
import { useNavigate } from "react-router-dom";

export const Properties = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState(data);
  const [data, setData] = useState([]);
  useEffect(() => {
    const key = localStorage.getItem("key");
    const secret = localStorage.getItem("secret");
    const calculateMD5 = () => {
      return CryptoJS.MD5(`GET/books/a${secret}`).toString();
    };
    const sign = calculateMD5();

    //fetching data
    const fetchData = async () => {
      await axios
        .get("https://0001.uz/books/a", {
          headers: {
            key,
            sign,
          },
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.data);
        })
        .catch((err) =>
          err.response.status === 401 ? navigate("/sign-in") : ""
        );
    };
    fetchData();
  }, [navigate]);

  //pagenation
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      const key = localStorage.getItem("key");
      const secret = localStorage.getItem("secret");
      const calculateMD5 = () => {
        return CryptoJS.MD5(`GET/books/${searchValue}${secret}`).toString();
      };
      const sign = calculateMD5();
      const url = "https://0001.uz/books/" + searchValue;
      await axios
        .get(url, {
          headers: {
            key,
            sign,
          },
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.data);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <SearchWrap>
        <SearchInput
          onChange={handleSearchChange}
          handleKeyPress={handleKeyPress}
          placeholder="Search for something..."
        />
      </SearchWrap>
      {loading ? (
        <Loading />
      ) : !data ? (
        <Oops>
          <img src={oops} alt="This is error" />
        </Oops>
      ) : (
        <Container>
          <Container.CardWrap>
            {data &&
              data?.map((item, i) => {
                // console.log(item);
                return i >= (currentPage - 1) * 10 &&
                  i < currentPage * 10 - 1 ? (
                  <CardCon key={i} data={item} />
                ) : (
                  ""
                );
              })}
          </Container.CardWrap>
          <PagenationWrapper>
            <Pagination
              count={Math.floor(data.length / 9)}
              page={currentPage}
              onChange={handleChange}
              renderItem={(item) => (
                <PaginationItem component="div" {...item} />
              )}
            />
          </PagenationWrapper>
        </Container>
      )}
    </div>
  );
};

export default Properties;
