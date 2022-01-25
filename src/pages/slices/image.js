import React from 'react';
import styled from 'styled-components';

const Fullimg = styled.img`
  width: 100%;
  display: block;
  margin-top: 10px;
`

export const FullImage = ({slice}) => {
  return(
  <Fullimg src = {slice.primary.img.url}/>
  )
}
