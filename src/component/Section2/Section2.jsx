import * as contentful from "contentful"
import { useEffect, useState } from 'react'
import style from "./Section2.module.scss";

export const Section2 = () => {

    const [gallery, setGallery] = useState()

    const client = contentful.createClient({
        space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
        environment: "master",
        accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
    })

    useEffect(() => {

        client.getEntries({ content_type: 'section2' })
            .then((entry) => setGallery(entry))
            .catch(console.error())
    }, [])
    console.log(gallery);

    return (

        <section className={style.section2}>
            {
                gallery?.items.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.fields.galleryImage &&
                                <figure>
                                    <img src={`https:${item.fields.galleryImage.fields.file.url}`} />
                                    <p>{item.fields.galleryImage.fields.title}</p>
                                </figure>
                            }
                        </div>
                    )
                })
            }
        </section>
    )
}