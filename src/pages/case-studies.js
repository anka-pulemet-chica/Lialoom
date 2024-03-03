import React from 'react'
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import slugify from 'slugify'


const query = graphql`
query QueryCases {
  allContentfulCaseStudies {
    nodes {
      childContentfulCaseStudiesContentTextNode {
        content
      }
      title
      id
      picture {
        url
        title
        gatsbyImage(
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
  }
}`


const Case = () => {
  const data = useStaticQuery(query);
  const cases = data.allContentfulCaseStudies.nodes;
  return (
    <>
      <Layout>
        <div className="case-studies">
          <div className="page-header">Case Studies</div>
          <div className="container">
            <Carousel className="carousel">
              {cases.map((page, index) => {
                // const pathToImage = getImage(page)
                const slug = slugify(page.title, { lower: true })
                return (
                  <Carousel.Item>
                    {/* <GatsbyImage image={pathToImage} className="page-img" alt="" /> */}
                    <div className="box">
                      <img src={page.picture.url} alt={page.picture.title} width="300" height="200" />

                      <div><p>{page.title}</p> </div>
                      <div><span>{page.childContentfulCaseStudiesContentTextNode.content.substring(0, 200) + '...'}</span> </div>
                      <div className='linkto'><Link key={page.id} to={`../${slug}`}>READ MORE <BsArrowRight className="arrow" /></Link></div>
                    </div>
                  </Carousel.Item>)
              })}
            </Carousel>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Case
