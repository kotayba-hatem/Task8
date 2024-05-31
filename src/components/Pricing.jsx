
const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-content">
      <div className="pricing-card orange">
        <h3>Basic</h3>
        <p>for very small businesses and freelancers.</p>
        <div className="price">
          <p><span>$2.5/mo</span></p>
        </div>
        <ul>
          <li>Disk Space:<span> 500 M.B</span></li>
          <li>Bandwidth:<span> 500 G.B</span></li>
          <li>SubDomains:<span> Unlimited</span></li>
          <li>Parked Domains:<span> Unlimited</span></li>
          <li>E-mail Accounts:<span> Unlimited</span></li>
          <li>Cpanel (control panel):<span> Yes</span></li>
          <li>Money Back Guarantee:<span> 14 Days</span></li>
        </ul>
        <button className="orange">You will have 1 Gift</button>
      </div>
      <div className="pricing-card purple">
        <h3>Pro</h3>
        <p>for Individuals that need sharing vlogs or need huge portfolio.</p>
        <div className="price">
          <p><span>$5/mo</span></p>
        </div>
        <ul>
          <li>Disk Space:<span> 3000 M.B</span></li>
          <li>Bandwidth:<span> 3 TERA</span></li>
          <li>SubDomains:<span> Unlimited</span></li>
          <li>Parked Domains:<span> Unlimited</span></li>
          <li>E-mail Accounts:<span> Unlimited</span></li>
          <li>Cpanel (control panel):<span> Yes</span></li>
          <li>Money Back Guarantee:<span> 14 Days</span></li>
        </ul>
        <button className="purple">1 Gift per/mo for year</button>
      </div>
      <div className="pricing-card green">
        <h3>Business</h3>
        <p>for Team that need sharing and reporting.</p>
        <div className="price">
          <p><span>$8/mo</span></p>
          <p>5% discount during 2024</p>
        </div>
        <ul>
          <li>Disk Space:<span> 5000 M.B</span></li>
          <li>Bandwidth:<span> 5 TERA</span></li>
          <li>SubDomains:<span> Unlimited</span></li>
          <li>Parked Domains:<span> Unlimited</span></li>
          <li>E-mail Accounts:<span> Unlimited</span></li>
          <li>Cpanel (control panel):<span> Yes</span></li>
          <li>Money Back Guarantee:<span> 14 Days</span></li>
        </ul>
        <button className="green">3 Gifts per/mo for year</button>
      </div>
      <div className="pricing-card blue">
        <h3>Enterprise</h3>
        <p>for large companies that need admins & security</p>
        <div className="price">
          <p><span>$12/mo</span></p>
          <p>8% discount during 2024</p>
        </div>
        <ul>
          <li>Disk Space:<span> 10000 M.B</span></li>
          <li>Bandwidth:<span> 10 TERA</span></li>
          <li>SubDomains:<span> Unlimited</span></li>
          <li>Parked Domains:<span> Unlimited</span></li>
          <li>E-mail Accounts:<span> Unlimited</span></li>
          <li>Cpanel (control panel):<span> Yes</span></li>
          <li>Money Back Guarantee:<span> 14 Days</span></li>
        </ul>
        <button className="blue">Just Call Us</button>
      </div>
      </div>
      <div className="info">
        <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
      </div>
      <div className="contact">
        <p>Go Online, choose your plan and Contact us on:</p>
        <a href="https://focal-x.com/">contact@focal-x.com</a>
        <p>+963 935 033 139</p>
      </div>
    </section>
  );
};

export default Pricing;
