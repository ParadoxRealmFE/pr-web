import React from 'react';
import styled, {keyframes} from 'styled-components';
import Dialog from '../Dialog'

const pulseDot = keyframes`
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
`
const pulseRing = keyframes`
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
`

const PulseContainer = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1001;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  transform: translateX(-50%) translateY(-50%);
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 50%;
    background-color: ${(props) => props.pulseColor};
    animation: ${pulseRing} 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }
  
  &:after {
    opacity: 0.3;
    content: '';
    position: absolute;
    left: 0; 
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.pulseColor};
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    animation: ${pulseDot} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
  }
}

`

const PulsingButton = ({left, top, size = "30px" , color, text = "Coming Soon.", callBack}) => {
  const [open, setOpen] = React.useState(false)

  const pulseColor = React.useMemo(() => {
    let types = {red:"#FA7E57", yellow:"#F5E04A", green: "#A0F054"}
    return types[color]
  },[color])

  const handleOpen = () => {
    callBack()
    setOpen(!open)
  }

  return (
    <>
      <PulseContainer left={left} top={top} size={size} pulseColor={pulseColor} onClick={handleOpen}>
      </PulseContainer>
      <Dialog open={open} text={text} fn={handleOpen}/>
    </>
  )
}

export default PulsingButton;