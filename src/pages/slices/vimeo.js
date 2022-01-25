import React from 'react';
import styled from 'styled-components';


const FullVimeo = styled.div`
  padding:66.5% 0 0 0;position:relative;

  iframe{
    width: 100%;
    position:absolute;top:0;left:0;width:100%;height:100%;
  }
`

export const Vimeo = ({slice}) => {
  return(
      <FullVimeo dangerouslySetInnerHTML={{ __html: slice.primary.vimeo_url.html }} />
  )
}
