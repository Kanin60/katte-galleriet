//En footer der forklarer hvem i har været om at lave siden
import logo from '../../assets/Alogo.png'
import logo2 from '../../assets/logoK.png'
import style from './Footer.module.scss'
export const Footer = () => {

    return (
        <div className={style.footer}>
            <article>
                <h2>Kanin og Kat </h2>
                <p>Projektet "Kanin og Kat" er et spændende samarbejde mellem gruppemedlemmerne Amina og Kamilla. Amina har gjort en fantastisk indsats med at håndtere opsætningen af Contentful, herunder definering af content types og organisering af data. Derudover har hun været ansvarlig for udviklingen af Header, Section 1 og 2 samt Footer på vores platform.
                    På den anden side har Kamilla, spillet en afgørende rolle i opsætningen på Github, hvilket har sikret en problemfri samarbejdsproces. Kamilla har også arbejdet på Header og de to første sektioner, og hendes kreative evne har givet projektet en flot styling og visuel appel.
                    Sammen udgør De et effektivt team, der kombinerer teknisk ekspertise og æstetisk sans for at skabe en imponerende digital løsning.
                </p>
            </article>
            <figure>
                <img src={logo} alt="logo" />
                <img src={logo2} alt="logo" />
            </figure>

        </div>

    )

}