import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


const TemplateCase = ({ data }) => {
    return (
        <div>
            <Layout>
                <h4>{ }</h4>
            </Layout>
        </div>
    )
}

export const queryGetCase = graphql`
query getCase($title: String) {
  contentfulCaseStudies(title: {eq: $title}) {
    picture {
      url
      title
    }
    content {
      content
    }
  }
}`



export default TemplateCase 
