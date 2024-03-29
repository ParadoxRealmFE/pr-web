import React from 'react';
import styled from 'styled-components'
import Teampage from '../../../public/teampage.jpg?trace'
import { Typography } from '@mui/material'

const Section = styled.section`
  height: ${props => `${props.height + 200}px`};
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  height: ${props => `${props.height + 200}px`};
`

const TeamContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const TitleWrapper = styled.div`
  padding: 8px 0;
`

const TitleText = styled.h2`
  color: #fff;
`

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  padding: 0;
`
const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  position: absolute
`

const teamData = [
  {member: "Sly", position: "Creative Director & Design"},
  {member: "Robert White", position: "Front-end Developer"},
  {member: "Tyler Zimmerman", position: "3d Game Dev and AI Support"},
  {member: "Julian Beltz", position: " AI Support"},
  {member: "Mr.One", position: "Scenic Artist"},
  {member: "Ursula Sanzo", position: "Character Artist"},
  {member: "AudioChroma", position: "Musical Score"},
]

const partnersColabs = [
  {member: "Cobalt Lend"},
  {member: "NULS"},
  {member: "NULS Foundation"},
  {member: "CLH Labs(SOLANA Minting Partner)"},
  {member: "NFT Circle"},
  {member: "8Bit"},
  {member: "Py Foundation"},
  {member: "Revolutionary Radio"},
  {member: "Christopher Rossetti"},
]

const Team = ({height, width}) => {
  const teamRef = React.useRef()
  console.log(height, "teamRef")


  return (
    <Section height={height} width={width}>
      <ImageContainer height={height}>
        <ImageWrapper src={Teampage.src} alt="team"/>
        <TeamContainer ref={teamRef} height={height}>
          <Title text="Team" />
          <TeamWrapper>
            {teamData.map(({member, position}, i) => 
              <TeamMember member={member} position={position} key={i} />
            )}
          </TeamWrapper>
          <Title text="Partners & Colaborators" />
          <TeamWrapper>
            {partnersColabs.map(({member, position}, i) => 
              <TeamMember member={member} position={position} key={i} />
            )}
          </TeamWrapper>
        </TeamContainer>
      </ImageContainer>
    </Section>
  )
}

const Title = ({text}) => {
  return (
    <TitleWrapper>
      <TitleText>{text}</TitleText>
    </TitleWrapper>
  )
}

const TeamMember = ({member, position}) => {
  return (
    <TeamMemberWrapper>
      { position ?(
        <Typography>{`${member} --------------------- ${position}`}</Typography>
      ) : (
        <Typography>{member}</Typography>
      )}
    </TeamMemberWrapper>
  )
}

export default Team