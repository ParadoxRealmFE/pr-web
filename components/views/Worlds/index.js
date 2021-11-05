import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'

import Hand from '../../../public/hand.png'
import PulsingButton from '../../../components/PulsingButton'


const Section = styled.section`
  position: relative;
  z-index: -1;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HandContainer = styled.div`
  position: relative;
  width: 500px;
`

const Worlds = ({height, width}) => {
  return (
    <Section height={height} width={width}>
      <HandContainer>
      <PulsingButton top="115px" left="80%" size="50px" color="yellow"/>
        <Image src={Hand} alt="game hand" layout="responsive"/>
      </HandContainer>
    </Section>
  )
}

export default Worlds;