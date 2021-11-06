import Head from 'next/head'
import Image from 'next/image'
import Theatre from '../components/views/Theatre'
import Worlds from '../components/views/Worlds'
import Paradox from '../components/views/Paradox'
import Characters from '../components/views/Characters'
import Team from '../components/views/Team'
import Roadmap from '../components/views/Roadmap'
import useWindowDimensions from '../hooks/useWindowDimension'
import styled from 'styled-components'
import Social from '../components/views/Social'



const Main = styled.main`

`

export default function Home() {
  const { height, width } = useWindowDimensions()

  return ( 
    <div>
      <Head>
        <title>Paradox Realm</title>
        <meta name="description" content="Paradox Realm next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Theatre height={height} width={width}/>
        {/* <Worlds height={height} width={width}/> */}
        <Paradox height={height} width={width}/>
        {/* <Roadmap height={height} width={width}/> */}
        <Characters height={height} width={width}/>
        <Team height={height} width={width}/>
        <Social height={height} width={width}/>
      </Main>
    </div>
  )
}
