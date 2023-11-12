import styled, { css } from "styled-components";

const btn = css`
  top: 25px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 6px 12px;
  text-align: center;
  border: 0;
  border-radius: 3px;
`;

export const Card = styled.div`
  width: 350px;
  height: 370px;
  border-radius: 3px;
  margin-bottom: 30px;
  transition: transform 0.4s ease 0s;
  background-color: #fff;
  border: 1px solid #e6e9ec;

  :hover {
    transform: scale(1.01);

    box-shadow: 0px 8px 30px 8px rgba(34, 60, 80, 0.2);
  }
`;

Card.CardBody = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 350px;
  height: 220px;
`;

Card.HouseImg = styled.img`
  display: flex;
  width: 349px;
  height: 220px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  object-fit: contain;
`;

Card.BtnBlue = styled.button`
  ${btn};
  position: absolute;
  left: 25px;
  background-color: #5061df;
`;

Card.BtnBlack = styled.button`
  ${btn};
  position: absolute;
  right: 25px;
  background-color: #0d263b;
`;

Card.CardMain = styled.div`
  position: relative;
  padding-top: 24px;
  border-top: 0;
`;

Card.UserImg = styled.img`
  position: absolute;
  top: -19px;
  right: 23px;
  border: 2px solid #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  object-fit: cover;
`;

Card.TextContent = styled.div`
  margin-left: 20px;
  font-family: "Montserrat";
  font-style: normal;
`;

Card.CardHeading = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
`;

Card.City = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #302f2f;
  margin-bottom: 17px;
`;

Card.Desc = styled.strong`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 17px;
`;

Card.IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-bottom: 16px;
`;

Card.IconTextWrapper = styled.div`
  text-align: center;
  font-family: "Montserrat";
  color: #696969;
  margin-left: 35px;
`;

Card.IconText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

Card.CardFooter = styled.div`
  border-top: 2px solid #e6e9ec;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

Card.PriceContent = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  margin-left: 20px;
`;

Card.Through = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration: line-through;
  color: #696969;
`;

Card.Price = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

Card.CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -13px;
`;

Card.TopBottomWrapper = styled.div`
  margin-right: 20px;
  margin-top: 3px;
`;

Card.Icon = styled.img`
  margin-top: 7px;
`;

Card.LikeIcon = styled.img`
  margin: 12px;
  border: 1px solid #f6f8f9;
  padding: 10px;
  border-radius: 50%;
  background-color: #f6f8f9;
  color: #fff;
`;
