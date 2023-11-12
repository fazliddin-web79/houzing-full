import React, { useState } from "react";
import user from "../../assets/img/user.png";
import { Card } from "./styles";
import control from "../../assets/icons/vektor.svg";
import like from "../../assets/icons/like-icon.svg";

export const CardCon = (props) => {
  const [data] = useState(props.data);
  return (
    <Card>
      <Card.CardBody>
        <Card.HouseImg src={data.cover} alt="rasm" />
        <Card.BtnBlue>Delete</Card.BtnBlue>
      </Card.CardBody>
      <Card.CardMain>
        <Card.UserImg src={user} alt="rasm" />
        <Card.TextContent>
          <Card.CardHeading>{data.title}</Card.CardHeading>
          <Card.Desc>{data.author}</Card.Desc>
        </Card.TextContent>

        <Card.CardFooter>
          <Card.PriceContent>
            <Card.Price>Published date: {data.published}</Card.Price>
          </Card.PriceContent>
          <Card.CardIconWrapper>
            <Card.TopBottomWrapper>
              <Card.Icon src={control} alt="rasm" />
            </Card.TopBottomWrapper>
            <Card.LikeIcon src={like} alt="rasm" />
          </Card.CardIconWrapper>
        </Card.CardFooter>
      </Card.CardMain>
    </Card>
  );
};

export default CardCon;
