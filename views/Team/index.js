import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
import Teampage from '../../public/teampage.png'

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const TeamContainer = styled.div`
  position: absolute;
  top: 50%;
  // left: 50%;
  // right: 50%;
  bottom: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const TitleWrapper = styled.div`
  padding: 2rem 0;
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
`

const teamData = [
  {member: "Sly", position: "Creative Director & Design"},
  {member: "Trees", position: "Front-end Developer"},
  {member: "Tyler Zimmerman", position: "AI Support"},
  {member: "Julian Beltz", position: " AI Support"},
  {member: "Mr.One", position: "Scenic Artist"},
  {member: "Ursula", position: "Character Artist"},
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

const Team = () => {
  return (
    <Section>
      <ImageContainer>
        <Image src={Teampage} alt="team" layout="fill"/>
        <TeamContainer>
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
        <p>{`${member} --------------------- ${position}`}</p>
      ) : (
        <p>{member}</p>
      )}
    </TeamMemberWrapper>
  )
}

export default Team