
import markiting from '../../public/images/markiting.png';
import brandingOrange from '../../public/images/brandingOrange.png';

const Services = () => {
  return (
    <section className="services">
      <div className="service-card">
        <h3>Branding</h3>
        <p>The brand is hope,
        It is also the source of inspiration for everything you do when you
        deal with your customers and that is the important and emotional
        thing. Your Brand and Visual identity represents an intrinsic Value
        to your company.</p>
        <p className="provid">In focal X agency, we provide:</p>
        <ul>
          <li>Visual identity design.</li>
          <li>Define Brand Identity.</li>
          <li>Define Brand personality.</li>
          <li>Building Your brand strategy.</li>
          <li>Market research and competitors study.</li>
        </ul>
        <p className="provid">We walk with you from A to Z.</p>
        <img src={markiting} alt="Service" />
      </div>
      <div className="service-card2">
        <h3>Marketing</h3>
        <p>Talk to your customers and tell them you and your company&apos;s
        story through us the way you want.
        Let us plan the content that will bring your audience closer to you.</p>
        <p className="provid">In our marketing agency, we provide:</p>
        <ul>
          <li>E-mail marketing.</li>
          <li>Affiliate marketing.</li>
          <li>Influencer marketing.</li>
          <li>Market research and Analysis.</li>
          <li>App store optimization ( ASO ).</li>
          <li>Search engine Marketing ( SEM ).</li>
          <li>Search engine optimization ( SEO ).</li>
          <li>Social media marketing & campaigns.</li>
        </ul>
        <img src={brandingOrange} alt="Service" />
      </div>
    </section>
  );
};

export default Services;
