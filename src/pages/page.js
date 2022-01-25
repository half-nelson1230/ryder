import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalStyle} from './styles';
import styled from 'styled-components';
import {
  SliceZone,
  usePrismicDocumentsByType,
  usePrismicDocumentByUID,
  PrismicRichText,
  PrismicText,
  PrismicLink,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import {components} from './slices/index'
import {NotFound} from './notfound'

const Worky = styled.div`
margin-bottom: 30px;
`

const Page = () => {
  const {uid} = useParams();

  const [work, workState] = usePrismicDocumentByUID('work', uid);

  const notFound = workState.state === "failed";

  if(work){
return(
  <SliceZone slices={work.data.body} components={components}/>


)}else if (notFound) {
  return <NotFound/>
}
else return (<h2>loading...</h2>)
}

export default Page
