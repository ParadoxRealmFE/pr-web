import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import man from '../../../public/man.png'
import film from '../../../public/film.png'
import roadmap from '../../../public/roadmap.jpg'

const Section = styled.section`
  position: relative;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: center;
`
const FilmWrapper = styled.div`
  padding-top: 45px;
  position: relative;
  width: 90%
`

const FilmStrip = styled.div`
  postion: relative;
`

const CharWrapper = styled.div`
  // position: absolute;
  // bottom: 125px;
  // right: 0;
  // height: 400px;
  // width: 400px;

`

const roadmapData = {
  top: [
    {
      date: "October 31", 
      value: "Discord Launch", 
      top: 0, 
      left: 0, 
      deg: 0
    },
    {
      date: "November 1st", 
      value: "Earn Drop Challenge", 
      top: 0, 
      left: 0, 
      deg: 0
    },
    {
      date: "November 5th", 
      value: "Website Launch", 
      top: 0, 
      left: 0, 
      deg: 0
    },
    {
      date: "November 26th", 
      value: "Mint", 
      top: 0, 
      left: 0, 
      deg: 0
    },
    {
      date: "December 31st", 
      value: "Collab. w/NULS Hack-a-thon", 
      top: 0, 
      left: 0, 
      deg: 0
    },
  ]
}


const Roadmap = ({width, height}) => {
  return (
    <Section width={width} height={height}>
      {/* <FilmWrapper>
        <FilmStipComp />
        <FilmStipComp />
      </FilmWrapper> */}
      <CharWrapper>
        <Image src={roadmap} alt="character" layout="fill"/>
      </CharWrapper>
    </Section>
  )
}

const FilmStipComp = () => {
  return (
    <FilmStrip>
      <Image src={film} alt="film strp"/>
    </FilmStrip>
  )
}

export default Roadmap