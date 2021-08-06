import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <section id="ContactUs" className="contact_section">
        <div className="copyright">
          <i class="far fa-copyright"></i>
          <p>copyright 2021 SB. All right reserved</p>
        </div>
        <div className="Icons">
          <div className="Link">
            <a href="https://www.facebook.com/sonia.boutaghou/">
              <div className="Links">
                <i className="fab fa-facebook fa-5x"></i>
                <p>facebook</p>
              </div>
            </a>
          </div>
          <div className="Link">
            <a href="https://github.com/Sonia-BT">
              <div className="Links">
                <i className="fab fa-github fa-5x"></i>
                <p>github</p>
              </div>
            </a>
          </div>
          <div className="Link">
            <a href="https://www.linkedin.com/in/sonia-boutaghou-7b79801ba/">
              <div className="Links">
                <i className="fab fa-linkedin fa-5x"></i>
                <p>linkedin</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
