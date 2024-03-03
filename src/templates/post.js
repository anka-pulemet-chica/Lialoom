import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const post = () => {
    return (
        <Layout>
            <div className="post-page">
                <div className="post-page--BLOG">
                    <StaticImage
                        src="../assets/img/blog/blog.svg"
                    />
                </div>
            </div>
        </Layout>
    )
}

export default post
