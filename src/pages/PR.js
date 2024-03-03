import React from 'react'
import Layout from "../components/Layout"


const PR = () => {
    return (
        <Layout>
            <div className="pr">

                <div className="paired">
                    <div><h1>PR & Marketing services</h1></div>
                    <div><p>As your company reaches a certain phase of growth, you realize the
                        significance of PR and marketing initiatives. Whether your goals involve
                        establishing and nurturing customer relationships, remaining competitive, expanding into new markets,
                        generating sales, or fostering customer loyalty - marketing assumes a pivotal role.</p>
                    </div>

                </div>
                <div className="diff">
                    <h1>Difference between PR &  Marketing</h1>

                    <div className="diff-container">
                        <div className="first-row">
                            <p>
                                Marketing aims to promote products, services,
                                or brands to generate sales or achieve specific
                                business objectives. It involves activities such as
                                advertising, sales promotions, direct marketing, and
                                market research.
                            </p>
                            <p>
                                Marketing initiatives often have a shorter-term focus and
                                are geared towards driving immediate sales or achieving
                                specific campaign goals. Marketing campaigns may have
                                defined start and end dates, and their success is often
                                measured in terms of short-term metrics.
                            </p>
                        </div>

                        <div className="second-row">
                            <p>

                                The goal of PR is to manage and enhance
                                the reputation & public image of a company.
                                Our efforts focus on building relationships
                                with stakeholders, including the media, customers,
                                employees, investors, and the general public.

                            </p>
                            <p>

                                PR typically has a longer-term focus and is aimed
                                at building and maintaining a positive reputation over
                                time. The trust gained from customers through PR
                                efforts continues to convert to sales long after you
                                stopped your investment.

                            </p>
                        </div>
                    </div>


                    <div className="--bold"><b>PR focuses on managing reputation and building relationships over the long term, while marketing
                        is more focused on driving immediate sales or achieving specific campaign goals.
                    </b>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PR
