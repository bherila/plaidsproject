import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIV Facts: PL-AIDS – Partners In Learning About AIDS",
  description: "",
};

export default function Page() {
  return (
    <>
      <div id="display" className=""></div>
      <div id="content" className="hivfacts">
        <div id="primary" className="hivfacts">
          <h1>Globally</h1>
          <p>
            Internationally, high-risk HIV/AIDS sub-populations include&nbsp;
            <strong>injecting drug users</strong>,&nbsp;
            <strong>plasma blood donors</strong>,&nbsp;
            <strong>men who have sex with men</strong> (MSM),&nbsp;
            <strong>adolescents</strong> and&nbsp;
            <strong>commercial sex workers</strong>. Developing nations are
            experiencing high levels of HIV incidence rates; moreover, high
            rates of HIV are found in rural areas (in which traditional,
            conservative views are upheld), migratory regions (in which
            prostitution is common), and such populations are typically poor,
            lacking the resources to necessary ensure appropriate knowledge and
            education of fundamental HIV preventive measures.
          </p>
          <p>
            While sexual transmission and drug use are ubiquitously linked with
            the acquisition of HIV-infection in international settings, the
            HIV/AIDS epidemic is also influenced by a complex set of
            sociocultural causes as well as biological susceptibilities which
            include&nbsp;<strong>poverty</strong>,&nbsp;
            <strong>stigma</strong>,&nbsp;<strong>discrimination</strong>,&nbsp;
            <strong>healthcare accessibility</strong> (i.e., HIV prevention
            services, adequate HIV treatment regimens, etc.) along with&nbsp;
            <strong>possible genetic factors</strong> (i.e., delta 32 mutation).
          </p>
          <h1>Within the United States</h1>
          <p>
            More than 25 years into the AIDS epidemic, HIV infection continues
            to exact a tremendous toll in the United States (CDC, 2010). The
            Centers for Disease Control and Prevention (CDC) estimates that
            approximately 1.1 million persons are living with HIV in the United
            States. In 2007, HIV/AIDS Surveillance Reports discovered that 49%
            of U.S. citizens diagnosed with AIDS were Black/African American
            (CDC, 2009). Black women are hugely, and disproportionately,
            affected by AIDS, with the most likely transmission route being
            heterosexual sex (CDC, 2009). The largest population living with HIV
            (45%) comprised men who have sex with men (MSM), followed by persons
            infected through high-risk heterosexual contact (27%), those
            infected through injection drug use (22%), and those who were
            exposed through both male-to-male sexual contact and injection drug
            use (5%) (CDC, 2003).
          </p>
          <p>
            Since the first cases of acquired immunodeficiency syndrome (AIDS)
            were reported in 1981, infection with human immunodeficiency virus
            (HIV) has grown to pandemic proportions, resulting in an estimated
            65 million infections and 25 million deaths (CDC, 2006). During 2005
            alone, an estimated 2.8 million persons died from AIDS, 4.1 million
            were newly infected with HIV, and 38.6 million were living with HIV
            (CDC, 2005).
          </p>
          <p>&nbsp;</p>
        </div>
        <div id="secondary" className="hivfacts">
          <img src="/hiv-model.png" alt="HIV" />
          <p>
            HIV is the acronym for the <em>human immunodeficiency virus</em>.
            HIV without medical intervention leads to AIDS, or{" "}
            <em>acquired immunodeficiency syndrome</em>. HIV destroys the helper
            T cells of the body's immune system, seriously compromising the
            immune system and the ability of the body to fight infection.
          </p>
        </div>
      </div>
    </>
  );
}
