import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'

import Hand from '../../public/hand.png'
import PulsingButton from '../../components/PulsingButton'


const Section = styled.section`
  position: relative;
  zIndex: -1;
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HandContainer = styled.div`
  position: relative;
  width: 500px;
`

const Worlds = () => {
  return (
    <Section>
      
      <HandContainer>
      <PulsingButton top="115px" left="80%" size="50px" color="yellow"/>
        <Image src={Hand} alt="game hand" layout="responsive"/>
      </HandContainer>
    </Section>
  )
}

export default Worlds;