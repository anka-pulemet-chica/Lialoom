import React from 'react'
import Layout from '../../components/Layout'
// import '../../assets/css/solutions.css'

import training from "../../assets/img/solutions/training.svg"
import lead from "../../assets/img/solutions/lead.svg"
import ret from "../../assets/img/solutions/return.svg"
import money from "../../assets/img/solutions/money.svg"
import audit from "../../assets/img/solutions/audit.svg"
import worker from "../../assets/img/solutions/worker.svg"





const Servises = () => {

    return (
        <Layout>

            <h1>Services list</h1>
            <hr />

            <div className="idea">

                <div className="picbox">
                    <div className="pic">
                        <img src={training} alt="training" />
                    </div>
                    <div className="box">
                        <h3>Sales Strategy Workshop:</h3>
                        <p> Our experts will delve into your company's journey, product or services, business model, and ongoing initiatives. We’ll help to uncover your strengths, ICP and distinctive value proposition as we craft a Strategic Positioning Document and a comprehensive business development strategy with a detailed implementation plan.</p>
                    </div>

                </div>

                <div className="picbox">

                    <div className="box">
                        <h3>Outbound Lead Generation:</h3>
                        <p>Once you have a plan, get a team of specialists to execute it by expanding the customer base, making outbound multichannel outreach,  nurturing prospects through the sales funnel, and ultimately driving conversions about cooperation. Later on, your efforts will be instrumental for successfully concluding the deal.</p>
                    </div>
                    <div className="pic">
                        <img src={lead} alt="lead" />

                    </div>


                </div>

                <div className="picbox">
                    <div className="pic">
                        <img src={ret} alt="return" />

                    </div>
                    <div className="box">
                        <h3>Full-cycle Sales:</h3>
                        <p>End-to-end sales management is made effortless with our dedicated team. Delegate all sales initiatives and witness the influx of new contracts. Allow us to craft every aspect of the process – from engaging potential customers and understanding their needs to guiding them through the sales funnel, addressing concerns, and winning the deal.</p>
                    </div>




                </div>

                <div className="picbox">
                    <div className="box">
                        <h3>Sales Consulting:</h3>
                        <p>Find it expensive to build and maintain an in-house sales team and seek a more cost-effective solution.</p>
                    </div>

                    <div className="pic">
                        <img src={money} alt="money" />
                    </div>


                </div>

                <div className="picbox">

                    <div className="pic">
                        <img src={audit} alt="audit" />

                    </div>
                    <div className="box">
                        <h3>Sales Audit:</h3>
                        <p>Facing challenges in generating sufficient sales for your business growth? Conducting a thorough sales audit offers an unbiased and all-encompassing assessment of your company's sales processes, strategies, and overall performance. Uncover areas for improvement through a strategic evaluation of your sales practices.</p>
                    </div>




                </div>

                <div className="picbox">
                    <div className="box">
                        <h3>Hire a Single Sales Manager:</h3>
                        <p>A single dedicated expert with the selection of  time commitment - no side expenses on recruiting, training, perks, office space, PTO etc. He will collaborate directly with your team under your management, ensuring seamless communication, efficient strategy implementation, and KPI achievement.</p>
                    </div>

                    <div className="pic">
                        <img src={worker} alt="worker" />
                    </div>
                </div>
            </div>
            <hr />

        </Layout>
    )
}

export default Servises
