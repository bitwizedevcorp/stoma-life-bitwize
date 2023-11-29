"use client";
import Seo from "@/app/components/common/Seo";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";
import AdaugaProgramareForm from "@/app/components/common/pacienti/adaugaProgramare";
const AdaugaProgramare = () => {
  return (
    <>
      <Seo pageTitle="Adauga-Pacient" />
      <DefaultHeader />;
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Adauga Programare</h2>
            {/*<p className="fs-20 tx-dark">*/}
            {/*  Still don&lsquo;t have an account?{" "}*/}
            {/*  <Link href="/signup">Sign up</Link>*/}
            {/*</p>*/}
          </div>
          <AdaugaProgramareForm />
        </div>
        {/* End form-wrapper */}
        {/*<p className="mt-auto pt-50">Copyright @{currentYear} Bitwize inc.</p>*/}
        <img
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one wow fadeInRight"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two wow fadeInLeft"
        />
      </div>
      <div className="footer-style-two theme-basic-footer">
        <CopyrightFooter />
      </div>
    </>
  );
};

export default AdaugaProgramare;
