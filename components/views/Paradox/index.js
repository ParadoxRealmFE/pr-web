import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
import City from '../../../public/city2.jpg'
import PulsingButton from '../../PulsingButton'

const Section = styled.section`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Paradox = ({width, height}) => {
  return (
    <Section width={width} height={height} id="paradox">
      <ImageContainer>
        <PulsingButton left="45.5%" top="115px" size="30px" color="green"/>
        <PulsingButton left="27%" top="240px" size="30px" color="red"/>
        <PulsingButton left="80%" top="50%" size="30px" color="red"/>
        <PulsingButton left="15%" top="67.5%" size="30px" color="red"/>
        <Image src={City} alt="city" layout="fill" priority/>
      </ImageContainer>
    </Section>
  )
}

export default Paradox