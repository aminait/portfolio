import React, { useState } from 'react';
import { Paper, Box } from '@mui/material';
import Draggable from 'react-draggable';
import { Tooltip } from '@mui/material';

const DraggableProjectCard = ({
  index,
  //   updatePosition,
  gridPosition,
  zIndex,
  children,
  bringToFront,
}) => {
  //   const [zIndex, setZIndex] = useState(0);

  const onStartDrag = () => {
    // Set a high z-index value when dragging starts
    // setZIndex((prev) => prev + 3);
    bringToFront();
  };

  const onStopDrag = (e, data) => {
    // Reset z-index when dragging stops
    // setZIndex((prev) => prev + 1);
    bringToFront();
    const { x, y } = data; // Get the new x and y positions
    // updatePosition(index, { x, y });
  };
  return (
    <Draggable
      onStart={onStartDrag}
      onStop={onStopDrag}
      defaultPosition={gridPosition}
      bounds="parent"
    >
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          zIndex: zIndex,
          cursor: 'move',
          backgroundColor: (theme) => theme.palette.primary.light,
          borderColor: (theme) => theme.palette.lines.light,
          borderRadius: '0.5rem',
          borderStyle: 'solid',
          borderWidth: '2px',
        }}
      >
        {/* Traffic light controls */}
        <Box display="flex" justifyContent="flex-start">
          {/* <Tooltip title="close" placement="top"> */}
          <Box
            borderRadius="50%"
            bgcolor="#990000"
            width={12}
            height={12}
            m={1}
            // sx={{ cursor: 'pointer' }}
          />
          {/* </Tooltip> */}
          <Box borderRadius="50%" bgcolor="#ffd966" width={12} height={12} m={1} />
          <Box borderRadius="50%" bgcolor="#8fce00" width={12} height={12} m={1} />
        </Box>
        {/* Rest of the card content */}
        {children}
      </Paper>
    </Draggable>
  );
};

export default DraggableProjectCard;
