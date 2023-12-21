"use client";
import Link from "next/link";
// import LoginForm from "@/app/components/common/LoginForm";
import Seo from "../app/components/common/Seo";
import { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const LogIn = () => {
  const currentYear = new Date().getFullYear();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/home";

  const onSubmit = async (e: React.FormEvent) => {
    console.log("intru in functie");
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });
      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      console.log("ASTA E  RES:::::", res);

      setLoading(false);

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
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
      <Seo pageTitle="Login" />
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
              {/*  <img src="/images/logo/logo_01.png" alt="" width={95} />*/}
              {/*</Link>*/}
            </div>
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
            <h2 className="tx-dark mb-30 lg-mb-10">Login</h2>
            {/*<p className="fs-20 tx-dark">*/}
            {/*  Still don&lsquo;t have an account?{" "}*/}
            {/*  <Link href="/signup">Sign up</Link>*/}
            {/*</p>*/}
          </div>
          {/*<LoginForm*/}
          {/*  dateLogin={dateLogin}*/}
          {/*  setDateLogin={setDateLogin}*/}
          {/*  onSubmit={handleSubmit}*/}
          {/*/>*/}
          <form
            action="#"
            className="user-data-form mt-40 lg-mt-30"
            onSubmit={onSubmit}
          >
            <div className="row">
              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="popescu@gmail.com"
                    required
                    value={formValues.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
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

              <div className="col-12">
                <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                  {/*<div>*/}
                  {/*  <input type="checkbox" id="remember" />*/}
                  {/*  <label htmlFor="remember">Keep me logged in</label>*/}
                  {/*</div>*/}
                  <a href="#">Ai uitat parola?</a>
                </div>
                {/* /.agreement-checkbox */}
              </div>
              {/* End .col-12 */}

              <div className="col-12">
                <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
                  Login
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

export default LogIn;
