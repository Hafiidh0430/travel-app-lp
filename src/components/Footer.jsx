import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <header className="footer-header">
          <h4 className="text-book"></h4>
          <div className="cta-btn">
            <a href="">What a suprise?</a>
            <a href="">Book now</a>
          </div>
        </header>

        <div className="footer-body">
          <div className="left-section-footer">
            <div className="catalog-footer">
              <h5>Catalog.</h5>
              <div className="sub-catalog">
                <p></p>
                <span>/</span>
                <p></p>
                <span>/</span>
                <p></p>
                <span>/</span>
                <p></p>
              </div>
            </div>
            <h5 className="copyright">@2024 ~ Copyright.</h5>
          </div>
          <div className="right-section-footer">
             <div className="contact">
                <h3>Contact.</h3>
                <p>( +62 817-000-3267 )</p>
             </div>
             <div className="email">
                <h3>Email.</h3>
                <p>stayinajacontactid@gmail.com</p>
             </div>
             <div className="location">
                <h3>Location.</h3>
                <p>Alpha Tower, Sudirman Street No. 45, 18rd Floor, South Jakarta - 12930.</p>
             </div>
          </div>
        </div>
      </footer>
    </>
  );
}
