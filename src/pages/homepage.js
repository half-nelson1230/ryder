import React from 'react'

import { useEffect } from "react";
import {
  SliceZone,
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import {components} from './slices/index'

export const Homepage = () => {

const [home, homeState] = useSinglePrismicDocument('homepage');

if (home){
return(
  <div>
  <SliceZone slices={home.data.body} components={components}/>
  </div>
  )
  }

  else return(<h3>d'oh!</h3>)
}
