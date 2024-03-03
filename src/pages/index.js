import * as React from "react"
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import Slide from '../components/Slide'
import Kick from "../components/Kick"


export default function Home() {
  return (
    <Layout>
      <div className="homepage">
        <div className="background">
          <div className="first-page">
            <h1 className="company-name">Lialoom</h1>
            <div className="slogan">Partner services that drive your<br /> business growth.</div>
            <div className="simpletext">Skip recruiting, training, building and managing
              an in-house sales team while still enjoying its advantages. Our top-performing Sales development teams scale up B2B tech companies and accelerate revenue growth by proposing an efficient strategy and generating a quality sales pipeline.
              <p>We specialize in your business domain. We
                have the processes, technology & infrastructure.
                We know how to help. </p>
            </div>
            <div className="button">
              <Link to="/solutions/services-list"><button>View our services</button></Link>
            </div>
          </div>
        </div>


        {/* <div className="trusted">
        <div>Trusted by</div>
        <div className="container">
          <img src={bitsgap} alt="bitsgap" />
          <img src={softeco} alt="softeco" />
          <img src={realt} alt="realt" />
        </div>
      </div> */}

        <hr />
        <div className="gradient-bg">

          <div className="cycle">
            <div className="fit"></div>
          </div>


          <div className="technics-page">
            <h2>DEEP KNOWLEDGE OF THE B2B <br />TECH MARKET</h2>

            <div className="technics">
              <div><h3>Real Estate </h3> </div>
              <div><h3>FinTech</h3></div>
              <div><h3>EdTech</h3></div>
              <div><h3>SaaS</h3></div>
              <div><h3>AdTech</h3></div>
              <div> <h3>B2B Outstaffing</h3></div>
            </div >
            <p className="simpletext">Founded by the dynamic duo, Anastasia and Victoria, Lialoom emerged from a shared passion for bridging the gap in business strategies. Our journey began with a profound realization - not everyone has a comprehensive G2M strategy, brand positioning or a clear Ideal Customer Profile to drive quality leads, that turn to opportunities and revenue.</p>
            <p className="simpletext">Our mission is to empower organizations with the resources and expertise needed to not only navigate the competitive landscape but to dominate it.</p>
            <p className="simpletext">What makes Lialoom special? Our commitment to providing a dedicated team of sales specialists at every level. From seasoned Researchers and creative Copywriters to proactive Sales Development Representatives, Top-performing Sales Executive and meticulous Email Deliverability specialists - our comprehensive team is your powerhouse for success. We understand it's a collaborative effort. We believe that every business, regardless of size, deserves access to top-tier talent and a tailored strategy. Our model is built on efficiency, providing optimal engagement through impeccable resource management.</p>
            <p className="simpletext">Join us in writing success stories. Lialoom - where your vision meets our expertise, business growth becomes the only destination.</p>

          </div>
        </div>
        <Slide />

        <hr />


        <div className="kickoff">
          <h2>How to kickoff with us:</h2>
          <Kick />
        </div>
      </div>
    </Layout >

  )

}