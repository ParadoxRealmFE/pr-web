import React from 'react'
import styled from 'styled-components';
import Hand from '../../../public/hand.png?trace'
import PulsingButton from '../../../components/PulsingButton'


const Section = styled.section`
  height: 100%;
  width: ${props => `${props.width}px`};
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`
const HandContainer = styled.div`
  position: relative;
  width: 500px;
  padding: 4rem;
`

const ImageWrapper = styled.img`
  height: 100%;
  width: 100%
`

const Worlds = ({height, width}) => {
  return (
    <Section height={height} width={width}>
      <HandContainer>
      <PulsingButton top="115px" left="80%" size="50px" color="yellow"/>
        <ImageWrapper src={Hand.src} alt="game hand"/>
      </HandContainer>
    </Section>
  )
}

export default Worlds;