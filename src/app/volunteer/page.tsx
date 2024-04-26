import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer: PL-AIDS – Partners In Learning About AIDS",
  description: "",
};

export default function Page() {
  return (
    <>
      <div id="display" className=""></div>
      <div id="content">
        <div id="primary" className="page">
          <h1>Volunteer</h1>
          <p>To inquire about volunteering, please contact&nbsp;Nathan Feng (<a
              href="mailto:etnat@plaidsproject.org">nathanf@plaidsproject.org</a>).
          </p>
        </div>
      </div>
    </>
  );
}
