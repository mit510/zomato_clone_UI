import React from 'react';
import "./footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='footer'>
          <a href='https://www.facebook.com/profile.php?id=100019022762778' className='me-4 text-reset'>
          <i class="fi fi-brands-facebook"></i>
          </a>
          <a href='https://twitter.com/Mit_Patel_510' className='me-4 text-reset'>
          <i class="fi fi-brands-twitter"></i>
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
          <i class="fi fi-brands-google"></i>
          </a>
          <a href='https://www.instagram.com/patel_mit_510' className='me-4 text-reset'>
          <i class="fi fi-brands-instagram"></i>
          </a>
          <a href='https://www.linkedin.com/in/patel-mit-600007244' className='me-4 text-reset'>
          <i class="fi fi-brands-linkedin"></i>
          </a>
          <a href='https://github.com/mit510' className='me-4 text-reset'>
          <i class="fi fi-brands-github"></i>
          </a>
        </div>
      </section>

      <section className='footer-links'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Zomato
              </h6>
              <p>
              Who We Are

Blog

Work With Us

Investor Relations

Report Fraud

Press Kit

Contact Us
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Node
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Java Script
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <i className="fi fi-rr-marker icon"></i>
                Vidhyanagar , Anand
              </p>
              <p>
              <i className="fi fi-rr-envelope icon"></i>
                patelmitkumarmaheshbhai@gmail.com
              </p>
              <p>
              <i className="fi fi-rr-phone-call icon"></i> +91 9023969990
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright :- 
        <a className='text-reset fw-bold' href='#/'>
          @MIT_PATEL
        </a>
      <div className='absolute-center'>
       <b>Zomato Clone UI designed by Mit Patel</b> 
      </div>
      </div>
    </MDBFooter>
  );
}