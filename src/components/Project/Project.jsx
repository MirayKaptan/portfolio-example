/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import BreadCrumb from "../BreadCrumb/BreadCrumb"
import { Section, Container } from "../../globalStyles"

import {
  TopWrapper,
  ProjectTitle,
  ProjectHeadline,
  ProjectButton,
  ProjectDescription,
  ProjectLink,
  Content,
  LeftContainer,
  RightContainer,
  VersionContainter,
  ProjectBadges,
  ProjectBadge
} from "./ProjectStyles"

const Project = ({
  name,
  // projectId,
  version,
  // description,
  // image,
  // icon,
  link,
  tech,
  overview,
  features,
  techDetails,
  demo,
  conclusion,
}) => {
  return (
    <Section margin="auto" padding={"40px 0"}>
      <Container mb="1rem">
        <BreadCrumb />
      </Container>

      <Container>
        <TopWrapper>
          <VersionContainter>
            <ProjectTitle>{name}</ProjectTitle>
            <p>{version}</p>
          </VersionContainter>

          <ProjectButton>
            <ProjectLink href={link} target="_blank" rel="noreferrer">
              Visit Site
            </ProjectLink>
          </ProjectButton>
        </TopWrapper>

        <Content>
          <LeftContainer>
            <ProjectHeadline>Overview</ProjectHeadline>
            <ProjectDescription>{overview}</ProjectDescription>

            <ProjectHeadline>Features</ProjectHeadline>
            {features.map((feature, idx) => {
              return (
                <ProjectDescription key={idx}>
                  {idx + 1}. {feature}
                </ProjectDescription>
              )
            })}

            <ProjectHeadline>Technical Details</ProjectHeadline>
            <ProjectBadges>
              {tech.map((element, idx) => {
                return <ProjectBadge key={idx}>{element}</ProjectBadge>
              })}
            </ProjectBadges>
            <ProjectDescription>{techDetails}</ProjectDescription>

            <ProjectHeadline>Conclusion</ProjectHeadline>
            <ProjectDescription>{conclusion}</ProjectDescription>
          </LeftContainer>

          <RightContainer>
            <ProjectHeadline>Demo</ProjectHeadline>
            <video autoPlay loop muted width="100%" height="45%">
              <source src={demo} type="video/mp4" />
            </video>
          </RightContainer>
        </Content>
      </Container>
    </Section>
  )
}

export default Project
