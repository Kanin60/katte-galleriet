import * as contentful from "contentful"
import { useEffect, useState } from 'react'

export const Header = () => {

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
            {
                headerImg &&
                <img src={headerImg.items[10].fields.image.fields.file.url} alt={headerImg.items[10].fields.image.fields.title} />
            }
        </>
    )
}
