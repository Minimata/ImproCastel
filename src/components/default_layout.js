import React from "react"

import { ParallaxProvider } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { siteTitle } from "../helpers/globals"

export const defaultImage = graphql`
    fragment defaultImage on File {
        childImageSharp {
            fluid(maxWidth: 4096) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const iconImage = graphql`
    fragment iconImage on File {
        childImageSharp {
            fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const DefaultLayout = props => {
    const images = useStaticQuery(graphql`
        query {
            landingImage: file(relativePath: { eq: "landing.jpg" }) {
                ...defaultImage
            }
            logo: file(relativePath: { eq: "impro-castel-logo.png" }) {
                ...iconImage
            }
            instagram: file(relativePath: { eq: "instagram-icon.png" }) {
                ...iconImage
            }
            facebook: file(relativePath: { eq: "facebook-icon.png" }) {
                ...iconImage
            }
            mail: file(relativePath: { eq: "mail-icon.png" }) {
                ...iconImage
            }
        }
    `)

    // const navref = React.createRef()
    // const navbar = <Navbar ref={navref} title={siteTitle} images={images} />

    const DefaultLayoutPage = () => (
        <ParallaxProvider>
            <SEO title={siteTitle} />
            {/* {navbar} */}
            {React.cloneElement(props.children, {
                // navbar: navbar.ref,
                images: images,
            })}
            {/* <Footer /> */}
        </ParallaxProvider>
    )

    return <DefaultLayoutPage />
}

export default DefaultLayout
