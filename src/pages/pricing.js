import React from 'react'
import '../assets/css/pricing.css'
import Layout from '../components/Layout'
import AllPrices from '../components/AllPrices.js'

const Pricing = () => {
    return (
        <Layout>
            <div>
                <h1 className="head">Pricing</h1>
            </div>
            <div className="boxes">
                <AllPrices />
            </div>
        </Layout>
    )
}

export default Pricing
