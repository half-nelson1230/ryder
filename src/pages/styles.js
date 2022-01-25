import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --yellow:#5eb3e4;
    --green:#59611D;
    --tan: #f0f0db;
    --orange: #f2682a;
}

h1, h2, h3, h4, h5, h6, p, a, li, ul{
  font-family: clone-rounded-latin, sans-serif;
  font-weight: 400;
  color: #000;
}

a{
  text-decoration: none;
}
`

export const Container = styled.div`

width: 75%;
max-width: 60rem;
margin: 0 auto;
display: flex;
flex-wrap: wrap;

@media(max-width: 700px) {
  width: 90%;
  max-width: 90%;
}
`

export const VidContainer = styled.div`
  position: relative;
  padding-bottom: 63.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-bottom: 50px;
  width: 100%;

  iframe{
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Main = styled.div`
width: 100%;
display: flex;

`

export const Stuff = styled.div`
width: 73%;
`
