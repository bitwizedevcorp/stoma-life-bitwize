"use server";
import Seo from "@/app/components/common/Seo";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";
import IstoricInfo from "@/app/components/istoric-pacient/info-display";
import AdaugaIstoricForm from "@/app/components/istoric-pacient/aduagaIstoricForm";
import ContactForm from "@/app/components/contact-form/contactForm";
import { useParams } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

const IstoricPacient = async ({ searchParams }: any) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const istoricPacientObject = {
    numePacient: searchParams.numePacient,
    prenumePacient: searchParams.prenumePacient,
    pacientId: searchParams.pacientId,
    doctorId: user.id,
  };

  return (
    <>
      <Seo pageTitle="Istoric-Pacient" />

      <DefaultHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-lg-6 text-center m-auto"
              data-aos="fade-right"
            >
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Istoric
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Toatele datele despre pacientul tau
                </h2>
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
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-150 lg-pb-60">
            <div className="row gx-xxl-5">
              <IstoricInfo id={searchParams.pacientId} />
            </div>
            {/* End .row */}
            {/*<div className="page-pagination-one d-flex justify-content-center text-center pt-15">*/}
            {/*    <Pagination />*/}
            {/*</div>*/}
            {/* End pagination */}
          </div>
          {/* End border-bottom */}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-9 m-auto">
            <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
              Adauga informatii.
            </h2>
          </div>
          <div className="col-xl-11 m-auto">
            <AdaugaIstoricForm pacientData={istoricPacientObject} />
            {/* /.form-style-one */}
          </div>
        </div>
      </div>

      <CopyrightFooter />
    </>
  );
};

export default IstoricPacient;
