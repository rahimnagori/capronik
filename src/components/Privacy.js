import "./Privacy.css";
import { PROJECT_CONTACT_EMAIL } from "../utils/constants";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="date">Effective Date: February 8, 2026</p>

        <p>
          At <strong>Capronik</strong>, we value your style—but we value your
          privacy even more. This Privacy Policy describes how your personal
          information is collected, used, and shared when you visit or make a
          purchase from our store.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you interact with Capronik, we collect certain data to make your
          shopping experience seamless:
        </p>
        <ul>
          <li>
            <strong>Device Information:</strong> Browser type, IP address, time
            zone, and cookie data.
          </li>
          <li>
            <strong>Order Information:</strong> Name, billing/shipping address,
            payment details, and contact info.
          </li>
          <li>
            <strong>Customer Support Data:</strong> Any communication sent to
            our "Style Support" team.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Fulfill and ship your orders.</li>
          <li>Communicate with you regarding your latest fits.</li>
          <li>Screen for potential risk or fraud.</li>
          <li>
            Provide personalized updates or promotions (with your consent).
          </li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We only share your Personal Information with third parties that help
          us serve you better, such as:
        </p>
        <ul>
          <li>
            <strong>Shopify:</strong> To power our online storefront.
          </li>
          <li>
            <strong>Shipping Carriers:</strong> To get your gear to your
            doorstep.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws
            and regulations.
          </li>
        </ul>

        <h2>4. Your Rights</h2>
        <p>
          Depending on your location (e.g., GDPR in the EU or CCPA in
          California), you may have the right to access, correct, or delete the
          personal information we hold about you. To exercise these rights,
          please contact us below.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We maintain your Order Information for our records unless and until
          you ask us to delete this information.
        </p>

        <div class="contact-box">
          <h2>6. Contact Us</h2>
          <p>
            For more information about our privacy practices, please reach out
            via email:
          </p>
          <p>
            <strong>Email:</strong> {PROJECT_CONTACT_EMAIL}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
