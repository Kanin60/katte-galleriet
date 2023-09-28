import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as contentful from "contentful"
import { useEffect, useState } from 'react'

export const Section1 = () => {

    const [description, setDescription] = useState()

    const client = contentful.createClient({
        space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
        environment: "master",
        accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
    })

    useEffect(() => {
        client.getEntries()
            .then((entry) => setDescription(entry))
            .catch(console.error())
    }, [])


    return (
        <>
            {description &&
                <section>
                    <h1>{description.items[0].fields.headline}</h1>
                    <article>{documentToReactComponents(description.items[0].fields.description)}</article>
                </section>
            }
        </>
    )
}