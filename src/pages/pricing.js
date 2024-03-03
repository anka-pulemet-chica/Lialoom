import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import done from '../assets/img/icons/done.svg'
import Layout from '../components/Layout'


const query = graphql`
query MyQuery {
  allContentfulWorkshop {
    nodes {
      benefits
      per
      caption
      price
      heading
      description {
        raw
      }
    }
  }
}`


const retrieveFromRichText = (jsonString) => {
    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject);
    return jsonObject.content[0].content[0].value;
}

const repackArray = (arg) => { return arg.split(',') }



const Pricing = () => {
    const data = useStaticQuery(query);

    const prices = data.allContentfulWorkshop.nodes;

    return (
        <Layout>
            <div className="pricing">
                <div className="page-header"><h1>Pricing</h1></div>
                <div className="boxes">
                    {prices.map((price, index) => {
                        return (<div className="box">
                            <div className="pre">
                                <h3>{price.heading}</h3>
                                <p className="description">{retrieveFromRichText(price.description.raw)}</p>

                            </div>
                            <hr />
                            <div className="price">
                                <p className="starting">Starting from<div className='PriceContainer'> <span className="PriceValue">{price.price}</span><span className="per">{price.per}</span></div></p>
                                <p className='comments'>{price.caption}</p>
                            </div>

                            <div className="benefits">
                                <ul>
                                    {repackArray(String(price.benefits)).map((benefit, index) => {
                                        return (<div className="benefit"><img src={done} alt="item" />
                                            <span> {benefit} </span><br /></div>)
                                    })}
                                </ul>
                            </div>
                            <div className="bottom"><Link to="/form"><button> GET A QUOTE </button></Link></div>



                        </div>)
                    })}

                </div>
            </div>
        </Layout>
    )
}

export default Pricing
