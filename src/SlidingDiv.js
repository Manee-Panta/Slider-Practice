import React, { useState } from 'react';
import { Button, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const AppContainer = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
  height: 60,
  margin:'10px'
});

const SlidingDivContainer = styled(Box)(({ isVisible }) => ({
  position: 'absolute',
  right: isVisible ? 0 : '-100%',
  transform: `translateX(${isVisible ? '0' : '100%'})`,
  transition: 'right 0.3s ease-in-out, transform 0.5s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70%',
  maxWidth: '100%',
  height: '100%',
  backgroundColor: 'lightblue',
  zIndex: 1,
}));

const SlidingDiv = () => {
  const [isVisible, setIsVisible] = useState(false); 

  const handleToggle = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
     <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam magni eius consequuntur, nisi molestias
          itaque nesciunt eveniet fuga at odit veritatis laudantium distinctio consectetur omnis numquam explicabo impedit
          adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste a iusto. Ipsum impedit, excepturi
          ipsa non sapiente sequi. Facere ea quasi odit, cumque minus nemo vitae possimus similique. Veniam?
        </p>
        <Button variant="contained" color="primary" onClick={handleToggle}>
          Toggle Div
        </Button>
    
    <AppContainer>
      <div>
        <SlidingDivContainer isVisible={isVisible}>
          {isVisible && (
            <IconButton
              color="primary"
              aria-label="Close"
              onClick={handleToggle}
              sx={{ position: 'absolute', top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
          )}
          {isVisible ? <span>This is the sliding div content.</span> : null}
        </SlidingDivContainer>
      </div>
    </AppContainer>
    </>
  );
};

export default SlidingDiv;
