import {useRef} from 'react';
import emailjs from 'emailjs-com';
function HowCanIHelp() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_69m147t', 'template_qcawhyk', form.current, 'dv0ehT6Di1pRtXn-w')
            .then(() => {
                alert("Message sent successfully!");
            }, (error) => {
                alert("Failed to send message. Please try again later.", error.text);
            });
            e.target.reset();
    };
  return (
    <div>
        <h5 className="text-start font-colour mx-2">How Can I Help You?</h5>
        <form ref={form} onSubmit={sendEmail} className="my-4 mx-2">
            <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
            </div>
            <div className="mb-3 text-start">
            <button type="submit" className="btn btn-primary">Send Message</button> 
            </div>
        </form>
    </div>
    );
}
export default HowCanIHelp;