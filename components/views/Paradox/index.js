import React from 'react';
import styled from 'styled-components'
import City from '../../../public/city2.jpg?trace'
import Speakeasy from '../../../public/speakeasy.jpg?trace'
import Theatre from '../../../public/theatrescene.jpg?trace'
import livingRoom from '../../../public/livingroom.jpg?trace'
import PulsingButton from '../../PulsingButton?trace'
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack?trace';

const Section = styled.section`
  height: 100%;
  min-height: width: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;
  min-height: 100% !important;
  overflow: hidden;
  z-index: 1;
  padding: 8px;
  background: #000;
  @media (min-width: 768px) {
    padding: 2rem;
  }

`

const ImageContainer = styled.div`
  width: 100%;
  min-height: 1000px;
  position: relative;
  @media (max-width: 900px) {
    min-height: 600px;
  }

`

const Previous = styled(IconButton)`
  // position: absolute;
  // top: 5%,
  // left: 5%;
  // z-index: 1001;
  color: "#fff"
`

const ImageWrapper = styled.img`
width: 100%;
min-height: 1000px;
position: relative;
@media (max-width: 900px) {
  min-height: 600px;
}
`

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};



const data =
  {
  city: {
    image: City.src,
    hotSpots: [
      {
        left: "45.5%",
        top: "10%",
        size: "30px",
        color: "green",
        text: [
          {
            title: "",
            text: "The place is America. The time is the 1920’s. What a decade it was for the nation! Dubbed “the roaring twenties,” this era changed the social scene in America forever. Money was abundant thanks to the Industrial Revolution. Women were feeling free. They had received the right to vote and began wearing more revealing clothing and smoking in public. The men were feeling bold as they began to fight against prohibition (the law that made it illegal for Americans to have or consume alcohol). It was because of this law that people began opening hidden bars known as speakeasies. This was the era of gangsters and the birth of jazz music."
          },
          {
            title: "Guide:",
            text: "Explore this city. Enjoy the art. You’ll find a few places that will lead you deeper into the cityscape and off the streets. It’s in these areas that you’ll be given your first challenge to overcome. Be looking for a speakeasy, make your way to see a show at the theater, or sit inside a parlor and hear what secret conversations are being had. Welcome to the first world of the Paradox Realm. Good luck."
          }
        ]
      },
      {
        left: "27%",
        top: "20%",
        size: "30px",
        color: "red",
        transition: "livingRoom"
      },
      {
        left: "80%",
        top: "50%",
        size: "30px",
        color: "red",
        transition: "theatre"
      },
      {
        left: "15%",
        top: "67.5%",
        size: "30px",
        color: "red",
        transition: "speakeasy"
      },
    ]
  },
  speakeasy: {
    image: Speakeasy.src,
    hotSpots: [
      {
        left: "45.5%",
        top: "10%",
        size: "30px",
        color: "green",
      }
    ]
  },
  theatre: {
    image: Theatre.src,
    hotSpots: [
      {
        left: "45.5%",
        top: "10%",
        size: "30px",
        color: "green",
      }
    ]
  },
  livingRoom: {
    image: livingRoom.src,
    hotSpots: [
      {
        left: "45.5%",
        top: "10%",
        size: "30px",
        color: "green",
      }
    ]
  },
}

const Paradox = ({width, height}) => {
  const image = React.useRef()
  return (
    <Section width={width} height={image.current?.clientHeight || 1000} id="paradox">
      <Transition />
    </Section>
  )
}

export const Transition = () => {
  const [page, setPage] = React.useState("city")
  const [direction, setDirection] = React.useState(0)


  const handleSetNewPage = React.useCallback((newPage) => {
    if(!newPage) return
    setPage(newPage)
  },[])

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
      <ImageContainer>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <ImageWrapper src={data[page].image} layout="fill" />
        </motion.div>
        {data[page]?.hotSpots.map((hotSpot, i) => (
          <PulsingButton 
            callBack={() => handleSetNewPage(hotSpot.transition)} 
            left={hotSpot.left} 
            top={hotSpot.top} 
            size={hotSpot.size} 
            color={hotSpot.color} 
            text={hotSpot.text} 
            key={i}
          />
        ))}
        {page !== "city" && (
          <Previous onClick={() => setPage("city")}>
            <ArrowBackIcon style={{ fill: '#fff', height: 50, width: 50}} />
          </Previous>
        )}
      </ImageContainer>
      </AnimatePresence>
  
    </>
  );
};


export default Paradox