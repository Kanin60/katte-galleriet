import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as contentful from "contentful"
import { useEffect, useState } from 'react'

export const Section2 = () => {

    const [gallery, setGallery] = useState()

    const client = contentful.createClient({
        space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
        environment: "master",
        accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
    })

    useEffect(() => {
        client.getEntries()
            .then((entry) => setGallery(entry))
            .catch(console.error())
    }, [])

    return (

        <section>
            {
                gallery?.items.map((item, index) => {
                    return (
                        <figure key={index}>
                            {item.fields.galleryImage && <img style={{ width: "10%" }} src={`https:${item.fields.galleryImage.fields.file.url}`} />}
                        </figure>

                    )
                })
            }
        </section>

    )
}