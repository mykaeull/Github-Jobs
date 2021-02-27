import React from "react"
import './styles.css'

function HowWorks() {

    return (
        <div className="container-hw">
            <div className="container-center">
                <span className="hw-title">How GitHub Jobs Works</span>
                <span className="hw-subtitle">GitHub Jobs is a great place attract the best technical talent for your company's open software development positions. Here's how:</span>
                <div className="container-img">
                    <div className="content-img">
                        <img alt="screenshot" src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg" />
                        <span className="img-title">Create & preview your listing</span>
                        <span className="img-subtitle">See exactly how your listing will look before you publish live. Before creating a listing, you must login with your GitHub account and verify your email address.</span>
                    </div>
                    <div className="content-img">
                        <img alt="screenshot" src="https://githubjobsclone.vercel.app/static/media/Capturar.5e17e1ab.PNG" />
                        <span className="img-title">Pay with a major credit card</span>
                        <span className="img-subtitle">Invoicing available on request for bulk orders. Email jobs@github.com for more info. Sorry, no recruitment agencies</span>
                    </div>
                    <div className="content-img">
                        <img alt="screenshot" src="https://jobs.github.com/images/modules/faq/screenshot-listing.jpg" />
                        <span className="img-title">Your listing goes live immediately</span>
                        <span className="img-subtitle">Listings are live for 30 days. We’ll send you a receipt and a link to change the listing.</span>
                    </div>
                </div>
                <span className="question">Questions? Submit a request via our <a href="https://support.github.com/contact?tags=jobs-support">contact form</a> and let's talk.</span>
            </div>
        </div>
    )
}

export default HowWorks