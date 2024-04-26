import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About: PL-AIDS – Partners In Learning About AIDS",
  description: "",
};

export default function Page() {
  return (
    <>
      <div id="display" className=""></div>
      <div id="content" className="about">
        <div id="primary" className="about">
          <h1>Who We Are</h1>
          <p>
            Originally founded in late 2009 as the Brown Global HELP Initiative,
            PL-AIDS Project changed into a media-based HIV/AIDS prevention and
            services advocacy 501(c)3 nonprofit corporation that seeks to reduce
            HIV/AIDS prevalence and incidence around the globe through
            film-based outreach to at-risk populations. We strongly believe in
            the power of biomedical HIV prevention initiatives and seek to
            refine ways to move this information into the public’s hands through
            novel media-based projects, including both advocacy and
            information-related projects.
          </p>
          <p>
            PL-AIDS is a federally tax-exempt charitable 501(c)3 organization
            controlled by a 4-member Board of Directors.
          </p>
          <h1>Local HIV Prevention and Services Programs</h1>
          <p>
            Our organization aims to make an impact on the local Rhode Island
            and Southern New England community among the groups at highest risk
            for HIV.
          </p>
          <p>
            The PL-AIDS Project (Partners in Learning about AIDS) targets the
            most at-risk populations, including
            <em>
              {" "}
              LGBTQ populations, Asian and&nbsp;Latino immigrants, and
              non-English speaking populations
            </em>{" "}
            within Rhode Island.
          </p>
          <h1>HIV Post-Exposure Prophylaxis Education and Advocacy</h1>
          <p>
            Despite sustained efforts to slow the spread of HIV, HIV incidence
            has remained stable, and thousands each year continue to be infected
            through sexual exposure. Post exposure prophylaxis, antiretroviral
            drugs taken consistently for 28 days after potential exposure to
            HIV, has been shown to reduce the risk of HIV risk by 81% in one
            case-control study. This biomedical prevention intervention could be
            helpful in stemming the tide of HIV.
          </p>
          <p>
            We are currently developing promotional education materials that we
            believe may be increase knowledge of post exposure in the local
            Providence community. These efforts may in turn increase uptake and
            ultimately lead to downstream reduction in HIV incidence rates.
          </p>
          <p>
            Currently, we are also in the process of developing film and
            media-based projects surrounding HIV-related topics.
          </p>
          <h1>HIV Post-Exposure Prophylaxis Medication Hotline</h1>
          <p>
            PL-AIDS is one of the only organizations in the United States that
            has a dedicated medication&nbsp;
            <a
              title="HIV Exposure Hotline"
              href="http://www.plaidsproject.org/exposed/"
            >
              PEP hotline
            </a>{" "}
            for individuals who believe they may have been exposed to HIV.
          </p>
          <p>
            The medication&nbsp;
            <a
              title="HIV Exposure Hotline"
              href="http://www.plaidsproject.org/exposed/"
            >
              hotline
            </a>{" "}
            puts individuals who believe they may have been exposed to HIV
            through sexual or drug-related routes in touch with Dr. Philip Chan,
            MD, an infectious disease and HIV physician at Miriam Hospital,
            Providence, Rhode Island who will evaluate each patient’s risk and
            determine whether prescribing the anti-HIV medication will be
            necessary to prevent a possible HIV infection.
          </p>
          <div></div>
          <div className="partners">
            <h1>Our Partners</h1>
            <div className="bio">
              <img src="/isis-logo.jpg" />
              <div className="text">
                <h2>
                  <a href="http://isisstorm.wordpress.com/">Isis Storm</a>
                </h2>
                <p>
                  Isis Storm is a collective of local female artists who focus
                  on female empowerment. This collaborative partnership is
                  allowing us to reach out to women and women of color, who are
                  at highest risk for&nbsp;HIV&nbsp;infection, according to
                  recent epidemiologic trends from the CDC. Please&nbsp;
                  <a href="/tombs-of-winter.mp3" target="_blank">
                    listen
                  </a>{" "}
                  to&nbsp;Isis Storm’s HIV Awareness song, “Tombs of Winter” by{" "}
                  <em>5th Elament, J9 and B-mor 7</em>.
                </p>
                <p>
                  Leaders of Isis Storm include Reza C. Clifton, Kal Champlain,
                  and Jessica-Patrice Dorsey Coulter-Simes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="secondary" className="about">
          <img src="/map.png" />
          <address>
            <p>
              <strong>PL-AIDS Project, Inc.</strong>
            </p>
            <p>1006 Charles Street, Suite 5</p>
            <p>North Providence, Rhode Island 02904</p>
            <p className="tel">
              <strong>tel:</strong> +1 401 484 7523
            </p>
          </address>
        </div>
      </div>
    </>
  );
}
