import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate: PL-AIDS – Partners In Learning About AIDS",
  description: "",
};

export default function Page() {
  return (
    <>
      <div id="display" className=""></div>
      <div id="content" className="donate">
        <div id="primary" className="donate">
          <h1>Contributions</h1>
          <p>
            We strongly appreciate any financial support from private donors,
            who make our work possible. PL-AIDS Project is a 501(c)3 nonprofit
            legally incorporated in the State of Rhode Island and Providence
            Plantations. Under U.S. tax code and federal law, PL-AIDS Project
            has also been awarded public charity status: 170(b)(1)(A)(vi).
          </p>
          <p>
            Donations, which are tax-deductible, are a cornerstone to funding
            our projects as many public health-related projects require
            substantial support from private sources. Donations make possible
            the distribution of HIV prevention material, which can be expensive.
            Every donation makes a difference!
          </p>
          <p>
            <em>
              Sponsor PL-AIDS in the upcoming 26th Annual Rhode Island AIDS Walk
              on October 2, 2011 by giving today!
            </em>
          </p>
          <h2>
            <strong>What contributions do</strong>
          </h2>
          <ul>
            <li>
              Help to fund airfare, living accommodations, and other necessary
              expenses for selected officers and Board members for PL-AIDS’
              current documentary project on post-exposure prophylaxis
            </li>
            <li>
              The Corporation’s HIV prevention programs or research-related
              expenses
            </li>
            <li>
              Pay officers and others involved with the public health-messaging
              and creation of the PEP documentary
            </li>
            <li>Operational expenses pertaining to the organization</li>
            <li>
              Individual donations over $350 receive recognition as a Corporate
              sponsor
            </li>
          </ul>
          <div id="secondary" className="donate">
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=YNT78G3U754M8">
              <img
                src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
