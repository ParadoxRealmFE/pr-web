import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import leftcurtain from '../../../public/leftcurtain.png'
import rightcurtain from '../../../public/rightcurtain.png'
import ticket from '../../../public/ticket.png'
import topcurtain from '../../../public/toppanel.png'
import ReactPlayer from 'react-player';
import { IconButton, Box } from "@mui/material"
// import video from '../../../public/movie.mp4'



const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  width: ${props => `${props.width}px`};
  max-width: ${props => `${props.width}px`};
  overflow: hidden;
  background-color: #000;

`

const Header = styled.header`
  width: 100%;
  height: 100%;
  min-height: 80px;
  max-height: 140px;
  background-color: #000;
  position: relative;
`

const TopCurtainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1002;
`
const TopCurtain = styled(Box)`
  width: 100%;
  height: 100%;
  positon: absolute;
  top:0;
  left: 0;
  z-index: -122;
`

const CurtainContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`

const CurtainWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
`

const TicketsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
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

const VideoPadder = styled.div``

const Video = styled.video`
  position: relative;
  z-index: 1;
`


const Theatre = ({height, width}) => {
  const [videoPosition, setVideoPosition] = React.useState(-1)
  const videoRef = React.useRef()
  const videoWrapperRef = React.useRef()
  const curtainRef = React.useRef()
  const headerRef = React.useRef()
  const sectionHeight = React.useMemo(() => {
    return headerRef.current?.clientHeight + videoRef.current?.offsetHeight
  },[height])

  const videoHeight = React.useMemo(() => {
    return curtainRef.current?.clientHeight
  },[height, videoRef])


  console.log(height)
  console.log(curtainRef.current?.clientHeight, "curtainRef")
  console.log(videoRef.current?.offsetHeight, "videoRef")
  console.log(videoWrapperRef.current?.clientHeight, "videoWrapperRef")
  console.log(videoHeight, "videoHeight")
  console.log(sectionHeight, "sectionHeight")

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
    setTimeout(()=>{
      setVideoPosition(10000)
      
    },5000)
   }
    
  }, []);
  return (
    <Section height={sectionHeight} width={width}>
      <Header ref={headerRef}>
        <TopCurtainContainer>
            {/* <TicketsContainer>
              {[
                {text: "Mint", link: ""},
              ].map(({text, link}, i) => (
                <Ticket text={text} link={link} key={i} />
              ))}
            </TicketsContainer> */}
    
            <Image src={topcurtain} layout="fill" />
         
        </TopCurtainContainer>
      </Header>
      <CurtainContainer ref={curtainRef} height={videoHeight} width={width}>
        <Curtain left image={leftcurtain} layout="responsive"/>
        <Curtain image={rightcurtain} layout="responsive"/>
        {/* <VideoWrapper 
          // ref={videoWrapperRef}
          height={videoRef.current?.offsetHeight}
          // videoPosition={videoPosition}
        > */}
          <VideoPadder />
          <Video
       
          width={width}
          ref={videoRef}
          controls src={require('../../../public/movie.mp4')} />
        {/* </VideoWrapper>  */}
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