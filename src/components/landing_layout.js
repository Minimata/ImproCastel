/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import Title from "./title"
import TeamMember from "./team_member"
import content from "../pages-content/landing"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Link as RebassLink } from "rebass"
import Img from "gatsby-image"
import { useColorMode } from "theme-ui"

import { Waypoint } from "react-waypoint"

import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
} from "../helpers/globals"

const LandingLayout = props => {
    const setNavbarTransparent = () => {
        // props.navbar.current.setTransparent()
    }
    const setNavbarOpaque = () => {
        // props.navbar.current.setOpaque()
    }

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("default")

    const scrollRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])

    React.useEffect(() => {
        // props.navbar.current.hideAllChapters()
        // setScrollToElementArray([
        //     () => window.scrollTo(0, scrollRef.current.offsetTop),
        // ])
    }, [])

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.9)"
                backgroundImage={
                    props.images.landingImage.childImageSharp.fluid.src
                }
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <Title
                        sx={{
                            fontSize: [24, 30, 40, 56, 64, 80],
                            letterSpacing: lettersSpacingBreakpoints,
                        }}
                    >
                        {/* <Parallax x={[-70, 10]}>IMPRO</Parallax>
                    <Parallax x={[100, -7]}> IMPACT</Parallax> */}
                        Impro Castel
                    </Title>

                    {/* <Box width={iconWidthBreakpoints} m={paddingBreakpoints}>
                        <Img
                            fluid={props.images.logo.childImageSharp.fluid}
                        ></Img>
                    </Box> */}
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <Title
                        sx={{
                            fontSize: [12, 13, 14, 16, 18, 20],
                            letterSpacing: lettersSpacingBreakpoints,
                        }}
                    >
                        Improvisation théâtrale - Animation de soirées
                    </Title>
                    <Title
                        sx={{
                            fontSize: [12, 13, 14, 16, 18, 20],
                            letterSpacing: lettersSpacingBreakpoints,
                        }}
                    >
                        Contact:{" "}
                        <RebassLink href="mailto:info@improcastel.ch">
                            info@improcastel.ch
                        </RebassLink>{" "}
                        - 079 648 81 20
                    </Title>
                </Flex>

                {/* <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <Parallax x={[0, -100]}>
                        <Box
                            width={iconWidthBreakpoints}
                            m={paddingBreakpoints}
                        >
                            <RebassLink href="https://www.facebook.com">
                                <Img
                                    fluid={
                                        props.images.facebook.childImageSharp
                                            .fluid
                                    }
                                ></Img>
                            </RebassLink>
                        </Box>
                    </Parallax>
                    <Box width={iconWidthBreakpoints} m={paddingBreakpoints}>
                        <RebassLink href="mailto:info@improcastel.ch">
                            <Img
                                fluid={props.images.mail.childImageSharp.fluid}
                            ></Img>
                        </RebassLink>
                    </Box>
                    <Parallax x={[0, 100]}>
                        <Box
                            width={iconWidthBreakpoints}
                            m={paddingBreakpoints}
                        >
                            <RebassLink href="https://www.instagram.com/">
                                <Img
                                    fluid={
                                        props.images.instagram.childImageSharp
                                            .fluid
                                    }
                                ></Img>
                            </RebassLink>
                        </Box>
                    </Parallax>
                </Flex> */}

                {/* <ScrollDownIndicator
                    onClick={() => scrollToElementArray[0]()}
                /> */}
            </Hero>
        </>
    )
}

export default LandingLayout
