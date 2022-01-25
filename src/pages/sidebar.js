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


const Sb = styled.div`
width: 25%;

h3{
  a{
border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: relative;
  :hover{
    border-bottom:1px solid #274cce;
    span{
      display: block;
    }
  }

  span{
    position: absolute;
    left: 0;
    white-space: nowrap;
    background-color: red;
    color: #fff;
    padding: 5px;
    transform: rotate(15deg);
    display: none;
    font-size: 14px;
    top: 0;
  }
  }
}

@media(max-width: 700px){
  width: 100%;

  h3{
    display: inline;
    margin-right: 10px;
  }
}
`

const PineCoAnim = styled.a`

padding-top: 20px;
display: inline-block;

@media(max-width:700px){
  position: absolute;
  padding-top: 0;

  margin-top: -20px;
  right: 10px;
}
h3{
  display: block;
  float: left;
  padding-top: 0;
  transition: 1s;
  position: relative;

  @media(max-width: 700px){
    margin-right: 0;
  }
}
`

const PcAnim = styled.h3`

  padding-left: 10px;
  margin-left: -10px;

${PineCoAnim}:hover & {
  padding-top: 0;
  padding-right: 15px;
}
`

const PcAnim2 = styled.h3`

${PineCoAnim}:hover & {
  padding-top: 5px;
  margin-left: -15px;
}
`

const PcAnim3 = styled.h3`

${PineCoAnim}:hover & {
  padding-top: 10px;
}
`
const AnimLine1 = styled.span`
width: 10px;
height: 2px;
background-color: #000;
position: absolute;
bottom: 2px;
left: 0px;
transition: 1s;
${PineCoAnim}:hover & {
  width: 27px;
}
`

const PineCoBG = styled.div`
position: fixed;
top: 0; right: 0; bottom: 100%; left: 0;
z-index: -1;
background-image: url(/images/pineco_bg.gif);
${PineCoAnim}:hover & {bottom: 0;}
`
const AnimLine2 = styled.span``



const MenuLink = ({ menuLink }) => {
  return (
    <h3>
      <PrismicLink field={menuLink.link_url}>
        <PrismicText field={menuLink.link_name} />
      </PrismicLink>
      {console.log(menuLink.link_url)}
        </h3>
  );
};



export const Sidebar = () => {

const [sidebar, sidebarState] = useSinglePrismicDocument('sidebar');

if (sidebar){

return(
  <Sb>
    <GlobalStyle/>

    {sidebar.data.link.map((menuLink, index) => (
            <MenuLink menuLink={menuLink} key={index} />
          ))}
        <h3>  <a>Pineco <span>coming soon</span></a></h3>


    </Sb>
  )
  }

  else return null
}
