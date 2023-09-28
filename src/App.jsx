import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as contentful from "contentful"
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./component/Header/Header";
import { Section1 } from "./component/Section1/Section1"
import { Section2 } from "./component/Section2/Section2";
import { Footer } from "./component/Footer/Footer"

function App() {

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Footer />

    </>
  )
}

export default App
