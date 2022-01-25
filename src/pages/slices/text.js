import React from 'react';
import styled from 'styled-components';
import {
  PrismicRichText,
} from "@prismicio/react";

const TextBlock = styled.div`
  width: 100%;
  display: block;
  padding-top: 30px;
  p{
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 1.5em;
  }
`

export const Text = ({slice}) => {
  return(
  <TextBlock>
  <PrismicRichText field={slice.primary.paragraphs} />
  </TextBlock>
  )
}
