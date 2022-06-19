import React from 'react'
import logo from "../../assets/icons/logo-icon.svg";
import map from "../../assets/icons/map-icon.svg";
import tell from "../../assets/icons/tell-icon.svg";
import email from "../../assets/icons/email-icon.svg";
import facebook from "../../assets/icons/facebook-icon.svg";
import twinter from "../../assets/icons/twinter-icon.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import linkedin from "../../assets/icons/linkedin-icon.svg";

import { ContactIconsContent, FooterBottom, FooterList, FooterMain, SiteContent, SiteFooter } from './styles'
import { Outlet } from 'react-router-dom';
export const Footer = () =>
{
    return (
        <>
            <Outlet />
            <SiteFooter>
            <FooterMain>
                <SiteContent >
                    <div>
                        <SiteContent.ContactHeading>Contact Us</SiteContent.ContactHeading>
                        <ContactIconsContent>
                            <ContactIconsContent.ContactIcon src={ map } alt="map" />
                            <ContactIconsContent.FooterText>
                                329 Queensberry Street, North <br /> Melbourne VIC 3051,
                                Australia.
                            </ContactIconsContent.FooterText>
                        </ContactIconsContent>

                        <ContactIconsContent>
                            <ContactIconsContent.ContactIcon src={ tell } alt="tell" />
                            <ContactIconsContent.FooterText>123 456 7890</ContactIconsContent.FooterText>
                        </ContactIconsContent>

                        <ContactIconsContent>
                            <ContactIconsContent.ContactIcon src={ email } alt="email" />
                            <ContactIconsContent.FooterText>support@houzing.com</ContactIconsContent.FooterText>
                        </ContactIconsContent>

                        <ContactIconsContent.SocialList>
                                <li><img src={ facebook } alt="" /></li>
                                <li><img src={ twinter } alt="" /></li>
                                <li><img src={ instagram } alt="" /></li>
                                <li><img src={ linkedin } alt="" /> </li>
                        </ContactIconsContent.SocialList>
                    </div>
                        <div>
                        <FooterList>
                            <FooterList.FooterItem>
                                <FooterList.FooterHeading>Discover</FooterList.FooterHeading>
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Chicago
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Los Angeles
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Miami
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                New York
                            </FooterList.FooterItem>
                        </FooterList>
                    </div>
                    <div className="site-footer-category-wrapper">
                        <FooterList>
                            <FooterList.FooterItem>
                                <FooterList.FooterHeading>Lists by Category</FooterList.FooterHeading>
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Apartments
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Condos
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Houses
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Offices
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Retail
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                Retail
                            </FooterList.FooterItem>
                        </FooterList>
                    </div>
                    <div className="site-footer-wrapper">
                        <FooterList>
                            <FooterList.FooterItem>
                                <FooterList.FooterHeading >Lists by Category</FooterList.FooterHeading>
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                About Us
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>
                                LTerms & Conditions
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>

                                Support Center
                            </FooterList.FooterItem>
                            <FooterList.FooterItem>

                                Contact Us
                            </FooterList.FooterItem>
                        </FooterList>
                    </div>
                </SiteContent>
            </FooterMain>
            <FooterBottom>
                <FooterBottom.FooterCon>

                    <img className="site-footer-logo" src={ logo } alt="" />
                    <ContactIconsContent.FooterText>
                        Copyright © 2021 CreativeLayers. All Right Reserved.
                    </ContactIconsContent.FooterText>
                </FooterBottom.FooterCon>
            </FooterBottom>
        </SiteFooter>
        </>
    )
}


export default Footer