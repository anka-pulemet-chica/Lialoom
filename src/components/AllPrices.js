import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import done from '../assets/img/icons/done.svg'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const query = graphql`
query MyQuery {
  allContentfulWorkshop {
    nodes {
      benefits
      duration
      price
      heading
      description {
        raw
      }
    }
  }
}`

const repackArray = (arg) => { return arg.split(',') }

const AllPrices = () => {
    const data = useStaticQuery(query)
    // const { allContentfulWorkshop: { edges: prices }, } = useStaticQuery(query);
    const prices = data.allContentfulWorkshop.nodes;


    return (
        <div className="boxes">
            {prices.map((price) => {
                return (<div className="box">
                    <div className="pre">
                        <h3>{price.heading}</h3>
                        <p>{price.description.raw}</p>
                        <div className="price">
                            <p>Starting from <div className="PriceValue">{price.price}</div></p>
                            <span>2-4 weeks</span>
                        </div>

                        <div className="benefits">
                            <ul>
                                {repackArray(String(price.benefits)).map((benefit) => {
                                    return (
                                        <li> <img src={done} />  {benefit}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>)
            })}

        </div>
    )
}

export default AllPrices
