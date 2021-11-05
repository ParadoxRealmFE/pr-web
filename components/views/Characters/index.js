import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
// import {Character} from './Character'
import Character from '../../../public/character.png'

const Section = styled.section`
  position: relative;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  width: 250px;
  height: 250px;
  padding: 1rem;
`

const Characters = ({width, height}) => {
  console.log(width, height)
  return (
    <Section width={width} height={height}>
      <CharacterContainer width={width} height={height}>
        {[0,1,2,3,4,5,6,7,8,9,10,11].map((item) => (
          <CharacterCard key={item}/>
        ))} 
      </CharacterContainer>
    </Section>
  )
}

const CharacterCard = () => {
  return (
    <Card>
       <Image src={Character} layout="responsive"/>
    </Card>
  )
}

export default Characters;