import React from 'react';

const Faq = () => {
  return (
    <div>
        <div className='faqfaq'>
            <h1>FAQ</h1>
        </div>
        <div className='whatishalf'>
          <ul>
            <li>
              <h2>What is FRANCHYZ?</h2>
              <p>FRANCHYZ is Nigeria’s original and leading shopping tool. We're teaming up with over 1,500 (and growing) Nigerian businesses to offer our customers exclusive discounts, helping them save thousands. We’re also giving away over ₦100 million in prizes to thousands of Nigerians — with rewards including cars, bikes, boats, houses, cash promotions, and much more. And this is only the beginning.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>What Does the FRANCHYZ+ Loyalty Membership Offer?</h2>
              <p>The FRANCHYZ Loyalty Membership is your gateway to exclusive offers and savings. With a monthly subscription, you’ll gain access to the FRANCHYZ Members Portal, where you can enjoy discounts from our official business partners. Plus, you'll earn accumulating entries every month for all FRANCHYZ promotions—yes, even the one-day deals! All of this starts at just #5000 per month, and you can cancel anytime.</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>How can I view my Membership Details on the portal and mobile app?</h2>
              <p>
                <strong>Mobile App:</strong> Download and open the app &gt; tap the Side Menu &gt; select <em>'Membership'</em> &gt; tap the card icon to view your payment information. This will take you to your Stripe Account page.
              </p>
              <p>
                <strong>Web Portal:</strong> Log in &gt; click <em>'Profile'</em> &gt; select <em>'Membership'</em> &gt; then view your payment information.
              </p>
              <p>
                <strong>Note:</strong> If your payment information is missing, your account may be canceled. For assistance, please email <a href="mailto:support@franchyz.com">support@franchyz.com</a>.
              </p>
            </li>
            <li>
              <h2>How to Update Payment Information</h2>
              <h3>Mobile App:</h3>
              <p>
                Go to <strong>Side Menu</strong> → <strong>Membership</strong> → <strong>Card Icon</strong> → <strong>Payment Info</strong>.<br />
                Add your card on the Stripe page and set it as <strong>default</strong>.
              </p>
            </li>
            <li>
              <h3>Web Portal:</h3>
              <p>
                Login → <strong>Membership</strong> → <strong>Billing Details</strong>.<br />
                Add a card and set it as <strong>default</strong> on the Stripe page.
              </p>

              <p><strong>Note:</strong> If there’s no payment info, your account may be cancelled. Please email <a href="mailto:support@franchyz.com">support@franchyz.com</a>.</p>
            </li>
            <li>
              <h2>"I no longer wish to continue my membership. What is the process to cancel it?"</h2>
              <p>To manage your membership, log in to the web portal and navigate to the "Membership" section, where you'll find all your subscription details and options.</p>
            </li>
          </ul>
        </div>
    </div>
     
  );
};

export default Faq;
