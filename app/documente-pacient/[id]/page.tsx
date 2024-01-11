// "use client";
// import Seo from "@/app/components/common/Seo";
// import DefaultHeader from "@/app/components/header/DefaultHeader";
// import CopyrightFooter from "@/app/components/common/CopyrightFooter";
// import Hero from "@/app/components/hero-upload-documents/Hero";
//
// const documentePacient = ({ searchParams }: any) => {
//   const pacientId = {
//     pacientId: searchParams.pacientId,
//   };
//   return (
//     <>
//       <Seo pageTitle="Documente-Pacient" />
//       <DefaultHeader />
//       <div className="hero-banner-six position-relative pt-180 md-pt-150">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
//               <Hero pacientId={pacientId} />
//               {/* /.subscribe-form */}
//             </div>
//           </div>
//           {/* End .row */}
//         </div>
//         {/* /.container */}
//
//         <div className="shapes shape-one rounded-circle" />
//         <img
//           src="/images/shape/shape_83.svg"
//           alt="shape"
//           className="lazy-img shapes shape-two"
//         />
//         <div className="shapes shape-three" />
//         <img
//           src="/images/shape/shape_84.svg"
//           alt="shape"
//           className="lazy-img shapes shape-four"
//         />
//         <img
//           src="/images/shape/shape_85.svg"
//           alt="shape"
//           className="lazy-img shapes shape-five"
//         />
//         <div className="shapes shape-six rounded-circle" />
//         <div className="shapes shape-seven rounded-circle" />
//         <img
//           src="/images/shape/shape_84.svg"
//           alt="shape"
//           className="lazy-img shapes shape-eight"
//         />
//         <img
//           src="/images/shape/shape_83.svg"
//           alt="shape"
//           className="lazy-img shapes shape-nine"
//         />
//       </div>
//       <div className="footer-style-two theme-basic-footer">
//         <CopyrightFooter />
//       </div>
//     </>
//   );
// };
//
// export default documentePacient;

import Link from "next/link";
import Seo from "../../components/common/Seo";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import Hero from "@/app/components/hero-upload-documents/Hero";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";
import Documents from "@/app/components/getDocuments/documents";

const DocuementPacient = ({ searchParams }: any) => {
  const pacientId = {
    pacientId: searchParams.pacientId,
  };
  return (
    <>
      <Seo pageTitle="Seo Agency" />

      {/* <!--
        =============================================
        Theme Default Menu
        ==============================================
        --> */}
      <DefaultHeader />
      {/* <!-- /.theme-main-menu --> */}

      {/*
			=============================================
				Theme Hero Banner
			==============================================
			*/}
      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <Hero pacientId={pacientId} />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>
          {/* End .illustration-holder */}
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>
      {/* /.hero-banner-six */}

      {/*
			=============================================
				Feature Section Nineteen
			==============================================
			*/}

      {/*
			=====================================================
				Blog Section Three
			=====================================================
			*/}

      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <Documents pacientId={pacientId} />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          {/* End .illustration-holder */}
        </div>
      </div>

      <div className="footer-style-six theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              {/* End .col-lg-2 */}

              <CopyrightFooter />

              {/* End .col-md-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-six */}
    </>
  );
};

export default DocuementPacient;
