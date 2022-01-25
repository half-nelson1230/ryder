import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

import Page from './pages/page'
import {Pineco} from './pages/pineco'
import {Homepage} from './pages/homepage'
import {Sidebar} from './pages/sidebar'
import {Footer} from './pages/footer'
import {WorkIndex} from './pages/workIndex'
import {NotFound} from './pages/notfound'
import { PrismicProvider, PrismicToolbar } from '@prismicio/react'
import {client, repositoryName} from './prismic'
import {Container} from './pages/styles'
import {
  BrowserRouter,
  Route,
  Routes,
  Redirect,
  Link
} from 'react-router-dom'




const MastHead = styled.div`
width: 100%;
margin: 24px 0 60px;
p{
  display: inline-block;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  :hover{
    border-bottom:1px solid #274cce;
  }
}

@media(max-width: 700px){
  margin: 24px 0 20px;
}
`

const Main = styled.div`
width: 70%;
@media(max-width: 700px){
  width: 100%;
  margin-top: 30px;
}
`


function App() {
  return (
    <PrismicProvider client={client}
    internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
        )}>
      <Container>
      <MastHead><a href="/"><p>ryder sherwood</p></a></MastHead>
    <BrowserRouter>
    <Sidebar/>
    <Main>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/pineco' element={<Pineco/>} />
        <Route path='/notfound' element={<NotFound/>} />
        <Route path='work/:uid' element={<Page/>}/>
        <Route path='/:uid' element={<WorkIndex/>} />
      </Routes>
      </Main>
    </BrowserRouter>

    <PrismicToolbar repositoryName={repositoryName} />
    <Footer/>
    </Container>
    </PrismicProvider>
  );
}

export default App;
