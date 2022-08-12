import { Typography, Box, Button } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import Block from './block';
import End from './end';
import { useInterval } from '../../../../hooks/useInterval';

const FIELD_SIZE = 16;
const FIELD_ROW = [...new Array(FIELD_SIZE).keys()];

const DIRECTION = {
  RIGHT: { x: 10, y: 0 },
  LEFT: { x: -10, y: 0 },
  TOP: { x: 0, y: -10 },
  BOTTOM: { x: 0, y: 10 },
};

const Game = () => {
  const [direction, setDirection] = useState(DIRECTION.LEFT);
  const [started, setStarted] = useState(false);
  const [snakeSegments, setSnakeSegments] = useState([
    { x: 80, y: 80 },
    { x: 80, y: 70 },
    { x: 80, y: 60 },
  ]);
  const [score, setScore] = useState(0);
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * FIELD_SIZE),
    y: Math.floor(Math.random() * FIELD_SIZE),
  });
  const canvasRef = useRef();

  const limitByField = (x) => {
    if (x >= FIELD_SIZE) {
      return 0;
    }
    if (x < 0) {
      return FIELD_SIZE - 10;
    }
    return x;
  };

  function collidesWithFood(head, food) {
    return food.x === head.x && food.y === head.y;
  }

  function generateFood() {
    const food = {
      x: Math.floor(Math.random() * FIELD_SIZE),
      y: Math.floor(Math.random() * FIELD_SIZE),
    };
    setFood(food);
  }

  function newSnakePosition(segments, direction) {
    const [head] = segments;
    const newHead = {
      x: limitByField(head.x + direction.x),
      y: limitByField(head.y + direction.y),
    };
    if (collidesWithFood(newHead, food)) {
      generateFood();
      addScore();
      return [newHead, ...segments];
    } else {
      return [newHead, ...segments.slice(0, -1)];
    }
  }

  const getItem = (x, y, snakeSegments) => {
    if (food.x === x && food.y === y) {
      return (
        <Block
          sx={{
            backgroundColor: (theme) => theme.palette.accent.orange,
          }}
        />
      );
    }

    for (const segment of snakeSegments) {
      if (segment.x === x && segment.y === y) {
        return (
          <Block
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.purple,
            }}
          />
        );
      }
    }
  };

  const onKeyDown = (e) => {
    if (
      e.keyCode == 38 ||
      e.keyCode == 40 ||
      e.keyCode == 37 ||
      (e.keyCode == 38 && !started)
    ) {
      setStarted(true);
    }
    switch (e.keyCode) {
      case 38:
        setDirection(DIRECTION.TOP);
        break;
      case 40:
        setDirection(DIRECTION.BOTTOM);
        break;
      case 37:
        setDirection(DIRECTION.LEFT);
        break;
      case 39:
        setDirection(DIRECTION.RIGHT);
        break;
    }
  };

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const [head, ...tail] = snakeSegments;
  const intersectsWithItself = tail.some(
    (segment) => segment.x === head.x && segment.y === head.y
  );

  useInterval(
    () => {
      setSnakeSegments((segments) => newSnakePosition(segments, direction));
    },
    intersectsWithItself ? null : 200
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    function drawSnakePart(snakePart) {
      context.fillStyle = '#43D9AD';
      context.strokestyle = '#011221';
      context.fillRect(snakePart.x, snakePart.y, 10, 10);
      context.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
    const drawSnake = () => {
      snakeSegments.forEach(drawSnakePart);
    };
    drawSnake();
  }, [started]);

  return (
    <Box flexDirection="column" alignItems="center">
      <Typography>Snake Game {score}</Typography>
      {intersectsWithItself ? (
        <End size={FIELD_SIZE} />
      ) : (
        <canvas
          ref={canvasRef}
          id="snakegame"
          width="230"
          height="430"
        ></canvas>
        // <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        //   {FIELD_ROW.map((y) => (
        //     <Box key={y} sx={{ display: 'flex', flexDirection: 'row' }}>
        //       {FIELD_ROW.map((x) => (
        //         <Box sx={{ display: 'inline-flex' }} key={x}>
        //           {
        //             (started && getItem(x, y, snakeSegments)) || '.'
        //             // <Block sx={{ backgroundColor: 'transparent' }} />
        //           }
        //         </Box>
        //       ))}
        //     </Box>
        //   ))}
        //   <Button color="secondary">Start</Button>
        // </Box>
      )}
    </Box>
  );
};

module.exports = Game;
