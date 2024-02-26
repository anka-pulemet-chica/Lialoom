import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/solutions.css'

import cust from "../../assets/img/solutions/customer.svg"
import disc from "../../assets/img/solutions/discount.svg"
import grow from "../../assets/img/solutions/growth.svg"
import work from "../../assets/img/solutions/no-work.svg"
import startup from "../../assets/img/solutions/startup.svg"
import targ from "../../assets/img/solutions/target.svg"

const Ups = () => {
    return (
        <Layout>

            <div className="paired">
                <div><h1>For <br />start-ups</h1></div>
                <div><h2>Embarking on the entrepreneurial adventure is a thrilling ride, yet for start-ups, mastering sales can be challenging. To supercharge their growth and concentrate on what they do best, numerous start-ups opt for sales outsourcing as a smart strategy. Dive into the perks, steps, and key factors of sales outsourcing crafted especially for start-ups.</h2>
                </div>

            </div>
            <hr />

            <div className="idea">
                <p>If you are...</p>

                <div className="picbox">
                    <div className="pic">
                        <img src={startup} alt="startup" />
                    </div>
                    <div className="box">
                        <h3>Launching a Startup:</h3>
                        <p>Need guidance on entering the market, closing your first deal, and establishing effective sales operations.</p>
                    </div>

                </div>

                <div className="picbox">

                    <div className="box">
                        <h3>Have no Internal Sales Infrastructure:</h3>
                        <p>Facing challenges in building an internal sales team from scratch due to budget and time constraints.</p>
                    </div>
                    <div className="pic">
                        <img src={work} alt="no-work" />

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
                        <h3>Overspend on your In-House Sales Team:</h3>
                        <p>Find it expensive to build and maintain an in-house sales team and seek a more cost-effective solution.</p>
                    </div>

                    <div className="pic">
                        <img src={disc} alt="discount" />
                    </div>


                </div>

                <div className="picbox">

                    <div className="pic">
                        <img src={cust} alt="customer" />

                    </div>
                    <div className="box">
                        <h3>Lack necessary Sales Expertise:</h3>
                        <p>Require assistance in establishing a growth strategy and developing effective business development processes.</p>
                    </div>




                </div>

                <div className="picbox">
                    <div className="box">
                        <h3>Seeking investment:</h3>
                        <p>Struggling to effectively present and position your project with a compelling pitch that emphasizes its value and unique selling proposition.Need assistance in crafting a winning business plan to secure investments.</p>
                    </div>

                    <div className="pic">
                        <img src={grow} alt="grow" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="some-text">
                <p >Schedule a discovery call with our Sales Expert to uncover your business development potential and receive a tailored offer - plan for moving forward.</p>
                <p class="color-grey">  <span>Lialoom</span> offers a dedicated team of sales specialists at every level to develop and implement a tailored strategy for your needs. Engage a comprehensive team, including Researchers, Copywriters, SDRs, Email Deliverability specialists, Account Executives, at the cost of a single specialist. We excel at resource management, ensuring optimal engagement for maximum efficiency.</p>
            </div>
            <hr />

            <div className="why">
                <h1>Why Sales Outsourcing for Start-ups?</h1>
                <div className="picbox">
                    <div className="longbox">
                        <p className="heading">Cost-Efficiency</p>
                        <hr />
                        <p>Acquire a comprehensive sales infrastructure at the cost equivalent to that of a single full-time employee.</p>
                        <p>Hire a single dedicated expert with the selection of time commitment - no side expenses on recruiting, training, perks, office space, PTO etc.</p>
                        <p>Scale your sales efforts up or down as needed without the fixed costs associated with hiring and training.</p>
                    </div>

                    <div className="longbox">
                        <p className="heading">Focus on Core Competencies</p>
                        <hr />
                        <p>Concentrate on developing your product or service by entrusting the sales function to specialists. </p>

                        <p>Allocate internal resources to innovation, product improvement, and customer satisfaction. </p>

                    </div>

                    <div className="longbox">
                        <p className="heading">Rapid Launch</p>
                        <hr />
                        <p>Escape extensive recruitment and onboarding processes with our rapid deployment solutions.</p>

                        <p>Have a dedicated sales team tailored to your needs in 1-3 weeks, allowing you to respond quickly to market opportunities.</p>
                    </div>

                    <div className="longbox">
                        <p className="heading"> Your domain Expertise</p>
                        <hr />
                        <p>Benefit from the domain expertise of your dedicated team in crafting a customized sales strategy and plan for seamless business growth.</p>

                        <p>We invest in the continuous training and development of our sales teams. This ensures that the sales professionals stay up-to-date with the latest industry trends and sales methodologies.</p>
                    </div>

                    <div className="longbox">
                        <p className="heading">Transparency and Reporting</p>
                        <hr />
                        <p>

                            Collaborative approach with open communication channels for real-time updates and feedback.
                        </p>
                        <p>
                            Regular, detailed reporting on key performance indicators, ensuring transparency and accountability.

                        </p>
                    </div>

                    <div className="longbox">
                        <p clasName="plaintext">We turned to Lialoom for a  market entry strategy. Victoria and Anastasia were very attentive in assessing our strengths and risks before presenting a comprehensive plan. With their help and expertise, we managed to gain over 20 clients in just one year!</p>

                        <p>- Client quotation.</p>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Ups
