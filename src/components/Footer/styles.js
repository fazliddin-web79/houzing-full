import styled from "styled-components";

export const SiteFooter = styled.div`
  background-color: #0d263b;
  font-family: "Montserrat";
  font-style: normal;
  color: white;
`;

export const SiteContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
`;

export const FooterMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  max-width: 1270px;
`;

SiteContent.ContactHeading = styled.div`
  padding-bottom: 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const ContactIconsContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

ContactIconsContent.ContactIcon = styled.img`
  margin-right: 21px;
`;

ContactIconsContent.FooterText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

ContactIconsContent.SocialList = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
`;

ContactIconsContent.SocialList.Item = styled.div``;

export const FooterList = styled.div`
  list-style-type: none;
`;

FooterList.FooterItem = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

FooterList.FooterHeading = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  padding: 0;
  margin-bottom: 32px;
`;

export const FooterBottom = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  padding: 16px 0;
`;

FooterBottom.FooterCon = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  max-width: 1270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
