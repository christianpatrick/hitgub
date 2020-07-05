import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <SectionTitle>Manage all of GitHub.com in one place.</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive desktop notifications for new GitHub events.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Pinned Tabs</FeatureTitle>
          <FeatureText>
            Keep the tabs you use the most pinned at the top for easy access.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Keyboard Shortcuts</FeatureTitle>
          <FeatureText>
            It's just a browser, so you can use the shortcuts you already love. Easily create new tabs or switch between open ones.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Privacy in Mind</FeatureTitle>
          <FeatureText>
            The app doesn't track you or touch a bit of your data. HitGub is simply a wrapper for GitHub.com.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
