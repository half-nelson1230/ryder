import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from './styles';

import { useEffect } from "react";
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
  PrismicRichText,
  PrismicText,
  PrismicLink,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const FootText = styled.p`
width: 100%;
font-size: 11px;
border-top: 1px solid rgba(0, 0, 0, 0.3);
margin-top: 60px; margin-bottom: 20px;
color:rgba(0, 0, 0, 0.5);
padding-top: 20px;
`

export const Footer = () => {

const [footer, footerState] = useSinglePrismicDocument('footer');

if (footer){

return(
  <FootText><PrismicRichText field={footer.data.footer_text} /></FootText>
  )
  }

  else return null
}
