import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as contentful from "contentful"
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./conponent/Header/Header"
import { Section1 } from "./conponent/Section1/Section1"
import { Section2 } from "./conponent/Section2/Section2"
import {Footer} from './conponent/Footer/Footer'


function App() {

  

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Footer/>

    </>
  )
}

export default App
