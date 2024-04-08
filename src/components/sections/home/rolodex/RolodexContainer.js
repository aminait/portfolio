import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlassEffectCard = styled(Card)(({ theme, isFocused }) => ({
  borderRadius: '16px',
  color: isFocused ? 'white' : 'gray',
  backdropFilter: 'blur(2px)',
  backgroundColor: isFocused ? 'rgba(0, 0, 0, 0.99)' : 'rgba(0, 0, 0, 0.3)',
  height: isFocused ? '25vh' : '20vh', // Focused card is larger
  margin: '0.5rem',
  transition: theme.transitions.create(['transform', 'background-color'], {
    duration: theme.transitions.duration.standard,
  }),
  transform: isFocused ? 'scale(1)' : 'scale(0.95)',
  '&:not(:last-child)': {
    marginRight: theme.spacing(2),
  },
  // Other styles for glass effect and central card opacity
  ...(isFocused && {
    opacity: 1, // Central card is fully opaque
  }),
  '&:hover': {
    opacity: isFocused ? 1 : 0.7, // Hover effect for non-focused cards
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  //   '& .slick-slide': {
  //     transition: 'opacity 0.3s',
  //     opacity: 0.6, // Default for all slides
  //   },
  //   '& .slick-slide.slick-center + .slick-slide, & .slick-slide.slick-center ~ .slick-slide + .slick-slide':
  //     {
  //       opacity: 0.8, // Cards next to the focused card are less opaque
  //     },
  //   '& .slick-list': {
  //     overflow: 'visible', // This is needed to prevent clipping of the blurred edges
  //   },
}));
const Rolodex = ({ cards }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const initialSlide = 1;
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const INTERVAL = 5000;

  const settings = {
    // beforeChange: (current, next) => setCurrentIndex(next),
    // afterChange: (num) => {
    //   setCurrentIndex(num);
    //   //   sliderRef.slickNext();
    // },
    dots: false,
    draggable: true,
    arrows: false,
    // centerMode: true,
    infinite: true,
    initialSlide,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    centerPadding: 0,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: INTERVAL,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      if (next === 0) {
        sliderRef.slickPause();
      }

      setCurrentIndex(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can add more breakpoints here
    ],
  };
  const handleKeyDown = (event) => {
    // Disable auto-scroll when arrow keys are pressed
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      sliderRef.slickPause();
    }

    if (event.key === 'ArrowUp') {
      sliderRef.slickPrev();
    }

    if (event.key === 'ArrowDown') {
      sliderRef.slickNext();
    }
  };

  // Add the keydown event listener
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sliderRef]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  //     }, INTERVAL); // Change card every 3 seconds

  //     return () => clearInterval(interval); // Clear the interval when the component unmounts
  //   }, [cards.length]);
  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      sliderRef.slickPrev();
    } else if (e.deltaY > 0) {
      sliderRef.slickNext();
    }
  };

  // Attach the scroll event listener to the window
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sliderRef]);

  return (
    <StyledSlider ref={setSliderRef} {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          {index === currentIndex && <Typography>{card.title}</Typography>}
          <GlassEffectCard key={index} isFocused={index === currentIndex}>
            <CardContent> {card.content}</CardContent>
          </GlassEffectCard>
        </div>
      ))}
    </StyledSlider>
  );
};

export default Rolodex;
