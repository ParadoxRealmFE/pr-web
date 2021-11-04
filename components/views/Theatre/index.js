import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import leftcurtain from '../../../public/leftcurtain.png'
import rightcurtain from '../../../public/rightcurtain.png'
import ticket from '../../../public/ticket.png'
import topcurtain from '../../../public/toppanel.png'
import ReactPlayer from 'react-player';
// import video from '../../../public/movie.mp4'



const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 200px;
`

const TopCurtainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1002;
`
const TopCurtain = styled.div`
  width: 100%;
  height: 100%;
  positon: relative;
  z-index: -122;
`

const CurtainContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
`

const CurtainWrapper = styled(motion.div)`
  width: 100%;
  max-height: 100vh;
  position:relative;
  z-index: 1001;
  }}
`

const TicketsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1100;
`

const TicketWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 65px;
`

const TicketText = styled.div`
  postion: relative;
  z-index: 2;
  font-weight: bold;
`

const TicketImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

`

const VideoWrapper = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Theatre = () => {
  const videoRef = React.useRef()

  React.useEffect(() => {
    setTimeout(()=>{
      videoRef.current.play()
    },2000)
  }, []);
  return (
    <Section>
      <Header>
        <TopCurtainContainer>
          <TicketsContainer>
          {[
            {text: "Home", link: ""},
            {text: "Game", link: ""},
            {text: "Characters", link: ""},
            {text: "Tokenomics", link: ""},
            {text: "Roadmap", link: ""},
            {text: "The Team", link: ""},
          ].map(({text, link}, i) => (
            <Ticket text={text} link={link} key={i} />
          ))}
          </TicketsContainer>
          <TopCurtain>
            <Image src={topcurtain} layout="responsive" />
          </TopCurtain>
        </TopCurtainContainer>
      </Header>
      <CurtainContainer>
        <Curtain left image={leftcurtain}/>
        <Curtain image={rightcurtain}/>
        <VideoWrapper>
          <video
          ref={videoRef}
          controls src={require('../../../public/movie.mp4')} controls />
        </VideoWrapper> 

      </CurtainContainer> 
    </Section>
  )
}

const Curtain = ({left, image}) => {
  const direction = React.useMemo(() => {
    return left ? "-85%" : "85%"
  },[left])

  return (
    <CurtainWrapper left={left}
      animate={{ x: direction }}
      transition={{ type: "spring", stiffness: 100, delay: 2, default: { duration: 2 }, }} 
      >
        <Image src={image}  layout="responsive"/>
    </CurtainWrapper>
  )
}

const Ticket = ({text, link}) => {
  return (
    <TicketWrapper>
      <TicketText href={link}>{text}</TicketText>
      <TicketImageWrapper>
        <Image src={ticket} layout="responsive" />
      </TicketImageWrapper> 
    </TicketWrapper>
  )
}


export default Theatre