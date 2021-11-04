import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
// import {Character} from './Character'
import Character from '../../../public/character.png'

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 300px;
  height: 300px;
`

const Characters = () => {
  return (
    <Section>
      <CharacterContainer>
        {/* {[0,1,2,3,4,5,6,7,8,9,10,11].map((item) => ( */}
          <CharacterCard />
        // ))} 
      </CharacterContainer>
    </Section>
  )
}

const CharacterCard = () => {
  return (
    <Card>
       <Image src={Character} />
    </Card>
  )
}

export default Characters;