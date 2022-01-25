import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {GlobalStyle} from './styles';
import styled from 'styled-components';
import {
  usePrismicDocumentsByType,
  usePrismicDocumentByUID,
  PrismicRichText,
  PrismicText,
  PrismicLink,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import {NotFound} from './notfound'


const Worky = styled.div`
width: 100%;
img{
  max-width: 100%;
  margin-bottom: 30px;
}
`


const WorkBlock = ({workBlock}) => {
  const checkLink = workBlock.project_link.id;
  let hasLink
  if(checkLink === undefined){
    hasLink = false
  }else hasLink = true
  return (
    <div>
    {hasLink ? (
      <PrismicLink field={workBlock.project_link}>
      <img src={workBlock.featured_image.url}/>
      </PrismicLink>
    ) : (<img src={workBlock.featured_image.url}/>) }
    </div>
  )
}

export const WorkIndex = () => {
  const { uid } = useParams();

  const [work, workState] = usePrismicDocumentByUID('projects', uid);
  const notFound = workState.state === "failed";

  if(work){
return(
  <Worky>
  {work.data.project.map((workBlock, index) => (
      <WorkBlock workBlock={workBlock} key={index}></WorkBlock>
  ))}
  </Worky>
)}
else if (notFound) {
  return <NotFound/>
}
else return (<h2>loading...</h2>)
}
