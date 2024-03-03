import React from 'react'
import Layout from '../../components/Layout'
// import '../../assets/css/solutions.css'

import cust from "../../assets/img/solutions/customer.svg"
import disc from "../../assets/img/solutions/discount.svg"
import grow from "../../assets/img/solutions/growth.svg"
import fund from "../../assets/img/solutions/funding.svg"
import calendar from "../../assets/img/solutions/calendar.svg"
import targ from "../../assets/img/solutions/target.svg"
import sales from "../../assets/img/solutions/sales.svg"
import balance from "../../assets/img/solutions/balance.svg"


const ScaleUps = () => {
    return (
        <Layout>

            <div className="paired">
                <div><h1>For scale-<br />ups and SMBs</h1></div>
                <div><h2>We understand that establishing and managing in-house sales teams can be demanding in terms of resources and time for scale-ups and small to medium-sized businesses. If you're experiencing either rapid or delayed growth, it can divert your attention from core business functions to the pursuit of an efficient sales infrastructure and approach. Whether you find yourself navigating a competitive maze or you are in search of an external perspective, we can help.</h2>
                </div>

            </div>
            <hr />

            <div className="idea">
                <p>If you are...</p>

                <div className="picbox">
                    <div className="pic">
                        <img src={fund} alt="funding" />
                    </div>
                    <div className="box">
                        <h3>Planning Market Expansion:</h3>
                        <p>Find it difficult to establish all in-house sales presence in different regions as part of your market expansion strategy.</p>
                    </div>

                </div>

                <div className="picbox">

                    <div className="box">
                        <h3>Experience Seasonal or Cyclical Demands:</h3>
                        <p>Need to scale up or down based on these fluctuations without the burden of maintaining a full-time sales team.</p>
                    </div>
                    <div className="pic">
                        <img src={calendar} alt="calendar" />

                    </div>


                </div>

                <div className="picbox">
                    <div className="pic">
                        <img src={targ} alt="target" />

                    </div>
                    <div className="box">
                        <h3>Facing Lead Generation Challenges:</h3>
                        <p>Struggling to achieve desired KPIs in calls, acquire quality leads, or secure contracts.</p>
                    </div>




                </div>

                <div className="picbox">
                    <div className="box">
                        <h3>Feel Rapid Growth:</h3>
                        <p>Need to scale up sales operations quickly while focusing on core functionalities during a period of fast business growth.</p>
                    </div>

                    <div className="pic">
                        <img src={grow} alt="growth" />
                    </div>
                </div>

                <div className="picbox">

                    <div className="pic">
                        <img src={disc} alt="discount" />
                    </div>

                    <div className="box">
                        <h3>Overspend on your In-House Sales Team:</h3>
                        <p>Find it expensive to build and maintain an in-house sales team and seek a more cost-effective solution.</p>
                    </div>


                </div>

                <div className="picbox">
                    <div className="box">
                        <h3>Lack necessary Sales Expertise:</h3>
                        <p>Require assistance in establishing a growth strategy and developing effective business development processes.</p>
                    </div>
                    <div className="pic">
                        <img src={cust} alt="customer" />

                    </div>

                </div>

                <div className="picbox">
                    <div className="pic">
                        <img src={sales} alt="sales" />
                    </div>
                    <div className="box">
                        <h3>Need Sales Process Optimization:</h3>
                        <p>Seek the insights of an external expert to maximize the effectiveness of your sales initiatives.</p>
                    </div>

                </div>

                <div className="picbox">
                    <div className="box">
                        <h3>Struggle with a negative business balance:</h3>
                        <p>Require assistance in rescuing the project.</p>
                    </div>
                    <div className="pic">
                        <img src={balance} alt="balance" />

                    </div>

                </div>
            </div>
            <hr />
            <div className="some-text">
                <p >Schedule a discovery call with our Sales Expert to uncover your business development potential and receive a tailored offer - plan for moving forward.</p>
            </div>
            <hr />

            <div className="why">
                <h1>Why Sales Outsourcing for Scale-ups and SMBs?</h1>
                <div className="picbox">
                    <div className="longbox">
                        <p className="heading">Your Domain Expertise</p>
                        <hr />
                        <p>   After navigating through your company and its unique business needs, we will match you to a perfect dedicated team, specializing in your business environment. They will prepare a customized sales strategy & plan to guide you to seamless business growth.</p>
                    </div>

                    <div className="longbox">
                        <p className="heading">Cost efficiency</p>
                        <hr />
                        <p>Engage a comprehensive team, including lead generation specialists, sales executives, copywriters, and marketing managers, all at the cost of a single specialist.</p>
                        <p> Hire a single dedicated expert with the selection of time commitment - no side expenses on recruiting, training, perks, office space, PTO etc.</p>

                    </div>

                    <div className="longbox">
                        <p className="heading">Experienced Sales professionals</p>
                        <hr />
                        <p>   We invest in the continuous training and development of our sales teams. This ensures that the sales professionals stay up-to-date with the latest industry trends and sales methodologies.</p>
                    </div>

                    <div className="longbox">
                        <p className="heading"> Rapid Launch and Scalable Team at Your Request</p>
                        <hr />
                        <p>
                            Have a dedicated sales team tailored to your needs in 1-3 weeks, allowing you to respond quickly to market opportunities.  </p>
                        <p> Scale your sales efforts up or down as needed with up to one-month notice period.</p>
                    </div>

                    <div className="longbox">
                        <p className="heading">Transparency and Reporting</p>
                        <hr />
                        <p>
                            Regular, detailed reporting on key performance indicators, ensuring transparency and accountability.

                        </p>
                        <p>
                            Regular, detailed reporting on key performance indicators, ensuring transparency and accountability.

                        </p>
                    </div>



                    <div className="longbox">
                        <p clasName="plaintext">
                            Thanks to Lialoom, our company experienced notable growth on the UK market! With their guidance and delivered strategy, not only we boosted our sales but also increased our overall turnover. They made a transformative impact on our business with their fresh perspective!
                        </p>
                        <p>- Client quotation.</p>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default ScaleUps
