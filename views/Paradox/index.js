import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
import City from '../../public/city.png'
import PulsingButton from '../../components/PulsingButton'

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const Paradox = () => {
  return (
    <Section>
      <ImageContainer>
        <PulsingButton left="45.5%" top="115px" size="30px" color="green"/>
        <PulsingButton left="27%" top="240px" size="30px" color="red"/>
        <PulsingButton left="80%" top="50%" size="30px" color="red"/>
        <PulsingButton left="15%" top="67.5%" size="30px" color="red"/>
        <Image src={City} alt="city" layout="fill"/>
      </ImageContainer>
    </Section>
  )
}

export default Paradox