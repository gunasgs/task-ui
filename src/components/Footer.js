import React from "react";

function Footer() {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6  col-lg-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/#">Web design</a>
                </li>
                <li>
                  <a href="/#">Development</a>
                </li>
                <li>
                  <a href="/#">Hosting</a>
                </li>
              </ul>
            </div>
            <div class=" col-sm-6  col-lg-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 item">
              <h3>Let Us Help You</h3>
              <ul>
                <li>
                  <a href="/#">COVID-19 and Amazon</a>
                </li>
                <li>
                  <a href="/#">Development</a>
                </li>
                <li>
                  <a href="/#">Hosting</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social ">
              <img
                class="foo-img "
                alt="lo"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
              />{" "}
            </div>
          </div>
          <p class="copyright">
            Copyright © 2023. All Rights Reserved{" "}
            <a
              href="https:gunaseelan.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Guna Sgs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
