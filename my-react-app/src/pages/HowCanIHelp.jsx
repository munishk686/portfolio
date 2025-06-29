function HowCanIHelp() {
  return (
    <div>
        <h5 className="text-start font-colour mx-2">How Can I Help You?</h5>
        <form className="my-4 mx-2">
            <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name"  required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email"  required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Subject</label>
                <input type="email" className="form-control" id="email"  required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <div className="mb-3 text-start">
            <button type="submit" className="btn btn-primary">Send Message</button> 
            </div>
        </form>
    </div>
    );
}
export default HowCanIHelp;