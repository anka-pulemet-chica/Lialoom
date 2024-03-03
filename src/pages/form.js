import React from 'react'
import Layout from '../components/Layout.js'
// import '../assets/css/form.css'

const Form = () => {
    return (
        <Layout>
            <main className="form-page">
                <section className="box">
                    <form className="form contact-form" action="https://formspree.io/f/xdoqzran" method="POST">
                        <div className="form-row">
                            <h2>Contact details</h2>
                            <br />
                            <span htmlFor="name">Your name</span>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-row">
                            <span htmlFor="email">Your Email</span>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="form-row">
                            <span htmlFor="message">Message</span>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn block">
                            Submit
                        </button>
                    </form>
                </section>

            </main>


        </Layout>
    )
}

export default Form
