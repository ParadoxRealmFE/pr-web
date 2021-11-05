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


const data = [
  [
    {
      title: "",
      text: "The place is America. The time is the 1920’s. What a decade it was for the nation! Dubbed “the roaring twenties,” this era changed the social scene in America forever. Money was abundant thanks to the Industrial Revolution. Women were feeling free. They had received the right to vote and began wearing more revealing clothing and smoking in public. The men were feeling bold as they began to fight against prohibition (the law that made it illegal for Americans to have or consume alcohol). It was because of this law that people began opening hidden bars known as speakeasies. This was the era of gangsters and the birth of jazz music."
    },
    {
      title: "Guide:",
      text: "Explore this city. Enjoy the art. You’ll find a few places that will lead you deeper into the cityscape and off the streets. It’s in these areas that you’ll be given your first challenge to overcome. Be looking for a speakeasy, make your way to see a show at the theater, or sit inside a parlor and hear what secret conversations are being had. Welcome to the first world of the Paradox Realm. Good luck."
    }
  ]
]

const Paradox = ({width, height}) => {
  return (
    <Section width={width} height={height} id="paradox">
      <ImageContainer>
        <PulsingButton left="45.5%" top="115px" size="30px" color="green" text={data[0]}/>
        <PulsingButton left="27%" top="240px" size="30px" color="red"/>
        <PulsingButton left="80%" top="50%" size="30px" color="red"/>
        <PulsingButton left="15%" top="67.5%" size="30px" color="red"/>
        <Image src={City} alt="city" layout="fill" priority/>
      </ImageContainer>
    </Section>
  )
}

export default Paradox