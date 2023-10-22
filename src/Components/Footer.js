import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid p-5  "
        style={{ backgroundColor: "#350065" }}
      >
        <div className="row">
          <div className="col">© typeMaster PVT LTD</div>
          <div className="col">
            Owned by <br />
            <a
              href="https://www.instagram.com/calligraphic_parv/"
              style={{ textDecoration: "none", color: "cyan" }}
            >
              @calligraphic_parv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
