import Head from 'next/head'
import Theatre from '../components/views/Theatre'
import Worlds from '../components/views/Worlds'
import Paradox from '../components/views/Paradox'
import Characters from '../components/views/Characters'
import Team from '../components/views/Team'
import Roadmap from '../components/views/Roadmap'
import useWindowDimensions from '../hooks/useWindowDimension'
import styled from 'styled-components'
import Social from '../components/views/Social'
import theme from '../theme'
import { ThemeProvider } from '@mui/material'

export default function Home() {
  const { height, width } = useWindowDimensions()

  return ( 
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Paradox Realm</title>
          <meta name="description" content="Paradox Realm next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Theatre height={height} width={width}/>
          <Paradox height={height} width={width}/>
          <Roadmap height={height} width={width}/>
          <Characters height={height} width={width}/>
          <Team height={height} width={width}/>
          <Social height={height} width={width}/>
        </main>
      </div>
    </ThemeProvider>
  )
}
