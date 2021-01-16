import React from "react";
import "./Contact.css";

const styles = {
    shadow: {
        textShadow: "5px 5px 25px black"
    },
    yellow: {
        color: "#F7B801",
    }
};

const Contact = () => {
    return (
        <div style={{paddingBottom: "150px"}}>
            <h4 className="text-center text-lg-right text-white" style={styles.shadow}><span className="font-weight-bold" style={styles.yellow}>Email:</span> DanielJHersh@gmail.com</h4>
            <h4 className="text-center text-lg-right text-white mb-5" style={styles.shadow}><span className="font-weight-bold" style={styles.yellow}>Phone Number:</span> &zwj;(818) &zwj;632-9905</h4>
            <section className="form-group">
                <h1 class="display-4 font-weight-bold text-white text-center" style={styles.shadow}>Let's Work Together!</h1>
                <article class="card-body">
                    <form id="contact-form">
                        <div className="form-group">
                            <input type="hidden" name="contact_number" id="contact_number" />
                            <label for="name" class="text-white">
                                <h3>Name</h3>
                            </label>
                            <input type="text" name="user_name" class="form-control" id="nameInput" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label for="Email" className="text-white">
                                <h3>Email address</h3>
                            </label>
                            <input type="email" name="user_email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="message" className="text-white">
                                <h3>Message</h3>
                            </label>
                            <textarea name="message" className="form-control" id="messageInput" rows="3" placeholder="Enter message" />
                        </div>
                        <button type="submit" value="send" className="btn btn-lg contact-btn text-white repo" style={{backgroundColor: "#F7B801"}}>
                            <h3 className="font-weight-bold" style={{marginBottom: "-.5px", textShadow: "none"}}>Submit</h3>
                        </button>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Contact;