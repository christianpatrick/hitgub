import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hitgub" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
              A dedicated browser for GitHub
            </h1>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
          </ImageWrapper>
          <HeaderButton href={props.downloadLink}>Download</HeaderButton>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 120px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
    text-align: center;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderButton = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 25px 100px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
`
const ImageWrapper = styled.div`
  justify-self: start;
  text-align: center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 100vw;
  max-width: 1200px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 80vw;
  }
`
