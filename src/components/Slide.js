import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import "../assets/sass/common/slide.scss"


function setResponsiveImage() {
  const screenWidth = window.innerWidth;
  if (screenWidth < "767px") {
  }
}


const Slide = () => {
  const data = useStaticQuery(graphql`
query QuerySlideLaptop {
  allFile(filter: {relativeDirectory: {eq: "laptop"}}) {
    nodes {
      svg {
        relativePath
      }
      publicURL
      relativeDirectory
    }
  }
}`)
  return (
    <div className="slide">
      <Carousel className="carousel">
        {data.allFile.nodes.map((pic, index) => (
          <Carousel.Item key="">
            <img src={pic.publicURL} alt="some alt" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Slide
