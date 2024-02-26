import React from 'react'
import Layout from '../components/Layout.js'
import '../assets/css/form.css'

const Form = () => {
    return (
        <Layout>
            <main className="form-page">
                <section>
                    <form className="form contact-form">
                        <div className="form-row">
                            <h2>Contact details</h2>
                            <br />
                            <label htmlFor="name">your name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">your email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">message</label>
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
