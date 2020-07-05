import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
      Made with &hearts; by <a href="https://mynameischristian.com/" target="_blank">Christian Helvin</a>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: #f8f8f8;
  clip-path: polygon(0 calc(100% - 5vw), 100% 0, 100% 100%, 0 100%);
  margin: 80px 0 0;
  padding: 50px 0 40px;
  text-align: center;
`

export default Footer
