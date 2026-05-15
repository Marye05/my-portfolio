export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-inner">
                <div className="contact-visual" aria-hidden="true">
                    <div className="contact-orbit" />
                    
                    
                </div>
                <div className="contact-content">
                    <h2 className="contact-title">Get In Touch</h2>
                    <form className="contact-form">
                        <div className="contact-row">
                            <div className="contact-field">
                                <label className="sr-only" htmlFor="firstName">First Name</label>
                                <input id="firstName" name="firstName" type="text" placeholder="First Name" />
                            </div>
                            <div className="contact-field">
                                <label className="sr-only" htmlFor="lastName">Last Name</label>
                                <input id="lastName" name="lastName" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="contact-row">
                            <div className="contact-field">
                                <label className="sr-only" htmlFor="email">Email Address</label>
                                <input id="email" name="email" type="email" placeholder="Email Address" />
                            </div>
                            <div className="contact-field">
                                <label className="sr-only" htmlFor="phone">Phone No.</label>
                                <input id="phone" name="phone" type="tel" placeholder="Phone No." />
                            </div>
                        </div>
                        <div className="contact-field contact-field--full">
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Message" />
                        </div>
                        <button className="contact-submit" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}