export default function Home() {
  return (
    <main>
      <div id="display" className="landing">
        <img src="/display-1.jpg" />
      </div>
      <div id="main">
        <div id="rec-news">
          <div className="heading">
            <h1>press</h1>
          </div>
          <div className="body">
            <h2>
              <a href="/2012/07/pl-aids-receives-ri-foundation-grant-to-fund-hiv-hotline/">
                PL-AIDS Awarded Rhode Island Foundation Grant To Fund HIV
                Hotline
              </a>
            </h2>
            <p>
              FOR IMMEDIATE RELEASE: July 23, 2012 PL-AIDS Project, Inc. has
              received a grant from the Rhode Island Foundation’s LGBTQ-focused
              Equity Action Fund to partially fund the costs of an HIV
              post-exposure prophylaxis (PEP) hotline for LGBTQ individuals
              at-risk for acquiring HIV. The grant will assist in paying for PEP
              drugs for uninsured patients as well [...]
            </p>
          </div>
        </div>
        <div id="upc-events">
          <div className="heading">
            <h1>events</h1>
          </div>
          <div className="body">
            <ul>
              <li>
                <h2>
                  <a href="/2010/11/pl-aids-sponsors-world-aids-day-celebration/">
                    PL-AIDS Sponsors World AIDS Day Celebration
                  </a>
                </h2>
                <p className="info">
                  <strong>On:</strong>{" "}
                  <em>December 1, 2010 from 8:00 PM to 10:00 PM</em>
                </p>
                <p>
                  The PL-AIDS Project is co-sponsoring a series of events,
                  including a major performance by Isis Storm, on the campus of
                  Brown University for World AIDS Day to enhance awareness
                  surrounding HIV/AIDS.
                </p>
              </li>
              <li>
                <h2>
                  <a href="/2010/09/hiv-prevention-with-isis-storm/">
                    HIV Prevention with Isis Storm: An Acoustic Night of
                    Celebration
                  </a>
                </h2>
                <p className="info">
                  <strong>On:</strong> <em>September 16, 2010 at 8:00 PM</em>
                </p>
                <p>
                  Join PL-AIDS Project for a night of acoustics and HIV
                  prevention with Isis Storm, a collective of female poets,
                  musicians, artists, photographers, and media producers that
                  seeks to empower the voices of the neglected.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="plaids">
          <div className="heading">
            <h1>Who we are</h1>
          </div>
          <div className="body">
            <p>
              PL-AIDS (<em>Partners in learning about AIDS</em>) is an
              organization geared towards understanding HIV proliferation in
              multifarious communities. In effect, PL-AIDS hopes to contribute
              methods in HIV prevention that are tailored to specific areas
              around the globe with a focus on developing media-based materials
              for at-risk population.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
