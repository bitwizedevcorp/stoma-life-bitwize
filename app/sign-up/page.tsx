"use client";
import Link from "next/link";
import Seo from "../components/common/Seo";
import SignUpForm from "@/app/components/common/SignUpForm";
import { ChangeEvent, useState } from "react";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    surrname: "",
    email: "",
    password: "",
    numar_telefon: "",
    judet: "",
    oras: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({
      name: "",
      surrname: "",
      email: "",
      password: "",
      judet: "",
      oras: "",
      numar_telefon: "",
    });

    console.log("ASTA E PAROLA::", formValues.password);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/home" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Seo pageTitle="Sign Up" />
      {/*
        =============================================
        Theme Main Menu
        ==============================================
        */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              {/*<Link href="/" className="d-block">*/}
              {/*  <img src="/images/logo/logo-stoma.png" alt="" width={95} />*/}
              {/*</Link>*/}
            </div>
            {/*<Link href="/" className="go-back-btn fw-500 tran3s">*/}
            {/*  Go to home*/}
            {/*</Link>*/}
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/*
        =============================================
        User Data Page
        ==============================================
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Registration</h2>
            <p className="fs-20 tx-dark">
              Have an account? <Link href="/login">Login Here</Link>
            </p>
          </div>
          {/*<SignUpForm />*/}
          <form
            action="#"
            className="user-data-form mt-40 lg-mt-30"
            onSubmit={onSubmit}
          >
            <div className="row">
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Nume</label>
                  <input
                    type="text"
                    placeholder="Popescu"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Prenume</label>
                  <input
                    type="text"
                    placeholder="Ion"
                    name="surrname"
                    value={formValues.surrname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Judet</label>
                  <input
                    type="text"
                    placeholder="Hunedoara"
                    name="judet"
                    value={formValues.judet}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Oras</label>
                  <input
                    type="text"
                    placeholder="Hunedoara"
                    name="oras"
                    value={formValues.oras}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Numar de telefon</label>
                  <input
                    type="text"
                    placeholder="0798989898"
                    name="numar_telefon"
                    value={formValues.numar_telefon}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="popescu@gmail.com"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pass_log_id"
                    required
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <span
                    className="placeholder_icon"
                    onClick={handleTogglePassword}
                  >
                    <span className=" d-flex align-items-center">
                      {showPassword ? (
                        <>
                          <i className="fa-regular fa-eye"></i>
                        </>
                      ) : (
                        <>
                          <i className=" fa-regular fa-eye-slash"></i>
                        </>
                      )}
                    </span>
                  </span>
                </div>
              </div>
              {/* End .col-12 */}
              {/* End .col-12 */}

              <div className="col-12">
                <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                  <div>
                    <input type="checkbox" id="agree_to_policy" />
                    <label htmlFor="agree_to_policy">
                      By clicking &quot;SIGN UP&quot; I agree to the Terms and
                      Conditions and Privacy Policy.
                    </label>
                  </div>
                </div>
                {/* /.agreement-checkbox */}
              </div>
              {/* End .col-12 */}

              <div className="col-12">
                <button
                  className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30"
                  disabled={loading}
                >
                  {loading ? "loading..." : "Sign Up"}
                </button>
              </div>
              {/* End .col-12 */}
            </div>
          </form>
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">Copyright @{currentYear} Bitwize inc.</p>
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
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default SignUp;
