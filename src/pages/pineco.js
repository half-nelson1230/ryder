import React from 'react'

import { useEffect } from "react";
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export const Pineco = () => {

const [pineco, pinecoState] = useSinglePrismicDocument('homepage');

if (pineco){
return(
  <div>
  <h2>HI this Pineco!!!!</h2>
  </div>
  )
  }

  else return(<h3>d'oh!</h3>)
}
