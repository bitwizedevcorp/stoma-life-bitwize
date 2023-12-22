import Seo from "../components/common/Seo";
import ContactForm from "@/app/components/contact-form/contactForm";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";
const contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* <!--
      =============================================
      Theme Default Menu
      ==============================================
      --> */}
      <DefaultHeader />

      {/*
        =============================================
        Feature Section Fifty One
        ==============================================
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Mentine detaliile pacientului
                </div>
                <h2 className="main-title fw-500 tx-dark">Actualizate.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
        =============================================
        Contact Section One
        ==============================================
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                Adauga mai multe detalii cu fiecare operatie efectuata catre
                pacient.
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
      <CopyrightFooter />
      {/*
        =============================================
        Contact Section One
        ==============================================
        */}
    </>
  );
};

export default contact;
