import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as contentful from "contentful"
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./conponent/Header/Header";
import { Section1 } from "./conponent/Section1/Section1"
import { Section2 } from "./conponent/Section2/Section2";

function App() {

  const [headerImg, setHeaderImg] = useState()

  const client = contentful.createClient({
    space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
    environment: "master",
    accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
  })

  useEffect(() => {
    client.getEntries()
      .then((entry) => setHeaderImg(entry))
      .catch(console.error())
  }, [])

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />

    </>
  )
}

export default App
