import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as contentful from "contentful"
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [headerImg, setHeaderImg] = useState()

  const client = contentful.createClient({
    space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,//Husk at udfyld .env-filen
    environment: "master",
    accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
  })

  useEffect(() => {
    client.getEntries().then((entry) => setHeaderImg(entry)).catch(console.error())
  }, [])
  console.log(headerImg);

  return (
    <>

    </>
  )
}

export default App
