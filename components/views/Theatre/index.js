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
  min-height: ${props => `${props.height + 120}px`};
  height: 100%;
  width: ${props => `${props.width}px`};
  max-width: ${props => `${props.width}px`};
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: #000;

`

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 160px;
  background-color: #000;
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
  top: 140px;
  left: 0;
  display: flex;
  height: 100%;
  width: ${props => `${props.width}px`};
  overflow: hidden;
`

const CurtainWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position:relative;
  z-index: 1001;
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

const TicketText = styled.p`
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
  min-height: 800px;
  // z-index: ${props => props.videoPosition};
`
// height: calc(${props => `${props.height}px`} - 180px);

const Theatre = ({height, width}) => {
  const [videoPosition, setVideoPosition] = React.useState(-1)
  const videoRef = React.useRef()
  console.log(videoRef)
  React.useEffect(() => {
    const playVideo =  setTimeout(()=>{
      if(videoRef.current !== undefined) {
        videoRef.current.play()
      }
    },1000)
    setTimeout(()=>{
     setVideoPosition(10000)
     
   },5000)
   try {
     playVideo()
   } catch(err) {
    console.log(err)
    setVideoPosition(10000)
   }
    
  }, []);
  return (
    <Section height={videoRef.current?.offsetHeight || height} width={width}>
      <Header>
        <TopCurtainContainer>
          <TicketsContainer>
            {[
              {text: "Mint", link: ""},
            ].map(({text, link}, i) => (
              <Ticket text={text} link={link} key={i} />
            ))}
            </TicketsContainer>
          <TopCurtain>
            <Image src={topcurtain} layout="fill" />
          </TopCurtain>
        </TopCurtainContainer>
      </Header>
      <CurtainContainer height={height} width={width}>
        <Curtain left image={leftcurtain} layout="responsive"/>
        <Curtain image={rightcurtain} layout="responsive"/>
        <VideoWrapper 
        height={videoRef.current?.offsetHeight}
        videoPosition={videoPosition}
        >
          <video
          style={{position: "absolute", top: 0, left: 0}}
          width={width}
          ref={videoRef}
          controls src={require('../../../public/movie.mp4')} />
        </VideoWrapper> 
      </CurtainContainer> 
    </Section>
  )
}

const Curtain = ({left, image}) => {
  const direction = React.useMemo(() => {
    return left ? "-100%" : "100%"
  },[left])

  return (
    <CurtainWrapper
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
      <TicketText type button onClick={link}>{text}</TicketText>
      <TicketImageWrapper>
        <Image src={ticket} layout="responsive" />
      </TicketImageWrapper> 
    </TicketWrapper>
  )
}


export default Theatre