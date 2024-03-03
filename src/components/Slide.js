import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import "../assets/sass/common/slide.scss"


const Slide = () => {
  const data = useStaticQuery(graphql`
query QuerySlideLaptop {
  laptopImage: allFile(filter: {relativeDirectory: {eq: "laptop"}}) {
    nodes {
      svg {
        relativePath
      }
      publicURL
      relativeDirectory
    }
  }

  mobileImage: allFile(filter: {relativeDirectory: {eq: "mobile"}}) {
    nodes {
      svg {
        relativePath
      }
      publicURL
      relativeDirectory
    }
  }
}`)

  const laptopContainer = data.laptopImage.nodes;
  const mobileContainer = data.mobileImage.nodes;

  const format = (window.innerWidth < 767) ? mobileContainer : laptopContainer
  return (

    <div className="slide">
      <Carousel className="carousel">
        {format.map((pic, index) => (
          <Carousel.Item key="">
            <img src={pic.publicURL} alt="some alt" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Slide
