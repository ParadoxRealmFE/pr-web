import * as React from "react"
import styled from 'styled-components'


const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const Header = styled.header`
  width: 100%;
  height: 200px;
`

const TopCurtainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`

const CurtainContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`

const CurtainWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const TempCurtainLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  border: 1px solid black;
  transform: translateX(-98%);
  transition: all 3s ease;
  transform-origin: 50% bottom;
  position:relative;
  z-index: 1001;
`

const TempCurtainRight = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  border: 1px solid black;
  transform: translateX(98%);
  transition: all 3s ease;
  transform-origin: 50% bottom;
  position:relative;
  z-index: 1001;
`

const Video = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Theatre = () => {
  const videoRef = React.useRef();

  React.useEffect(() => {
    setTimeout(()=>{
        // videoRef.current.play()
    },5000)
}, []);
  return (
    <Section>
      <Header>
        <TopCurtainContainer>
        </TopCurtainContainer>
      </Header>
      <CurtainContainer>
        <CurtainWrapper>
          <TempCurtainLeft />
        </CurtainWrapper>
        <CurtainWrapper>
          <TempCurtainRight />
        </CurtainWrapper>
        <Video ref={videoRef} autoPlay loop>
          <source src={require("/public/movie.mp4")} type='video/mp4'/>
        </Video>
        {/* <Video src={require("../../public/movie.mp4")} /> */}
        {/* <Video>
        <ReactPlayer url="https://vimeo.com/155811895" />
        </Video> */}
      </CurtainContainer> 
    </Section>
  )
}


export default Theatre