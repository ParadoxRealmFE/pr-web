import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
// import {Character} from './Character'
import Character from '../../../public/character.png'
import {Grid} from '@mui/material'

const Section = styled.section`
  position: relative;
  height: $100%;
  width: ${props => `${props.width}px`};
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  padding-top: 80px;
`

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  min-width: 100px;
  min-height: 100px;
  padding: 1rem;
  position: relative;
`

const Header = styled.div`
  color: #000;
`

const Title = styled.h3`
  color: #fff;
`

const Characters = ({width, height}) => {
  return (
    <Section width={width} height={height}>
      <Header>
        <Title>Character preview coming soon!</Title>  
      </Header>
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