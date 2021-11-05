import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components'

const Text = styled.p`
   
`

const Title = styled.div`
    font-weight: bold;
`

const TextWrapper = styled.div`
  padding: 1rem;  
  display: flex;
  flex-direction: column;
`


function SimpleDialog(props) {
  const { onClose, fn, open, text } = props;

  return (
    <Dialog onClose={fn} open={open}>
      {
        Array.isArray(text) ? (
          text.map(({title, text}, i) => (
            <TextWrapper key={i}>
              <Title>{title}</Title>
              <Text>{text}</Text>
            </TextWrapper>
          ))
        ) : (
          <TextWrapper>
            <Text>{text}</Text>
          </TextWrapper>
        )
      }
      
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;