import React from 'react';
import './assets/css/contact.css'; 
import pic from './assets/images/contact.png'

export default function Contact() {
    return (
        <div>
            <div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src={pic} alt="IMG"></img>
			</div>

			<form className="contact1-form validate-form">
				<span class="contact1-form-title">
					Get in touch
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name"></input>
					<span className="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" type="text" name="email" placeholder="Email"></input>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
					<input className="input1" type="text" name="subject" placeholder="Subject"></input>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" placeholder="Message"></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn">
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>

        </div>
    );
}
