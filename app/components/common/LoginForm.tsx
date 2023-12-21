// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { signIn } from "next-auth/react";
// // @ts-ignore
// const LoginForm = ({ dateLogin, setDateLogin, onSubmit }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/home";
//   const [loading, setLoading] = useState(false);
//
//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setDateLogin((prev: any) => ({ ...prev, [name]: value }));
//   };
//
//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     try {
//       setLoading(true);
//       setFormValues({ email: "", password: "" });
//
//       const res = await signIn("credentials", {
//         redirect: false,
//         email: formValues.email,
//         password: formValues.password,
//         callbackUrl,
//       });
//
//       setLoading(false);
//
//       console.log(res);
//       if (!res?.error) {
//         router.push(callbackUrl);
//       } else {
//         setError("invalid email or password");
//       }
//     } catch (error: any) {
//       setLoading(false);
//       setError(error);
//     }
//   };
//
//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//
//   return (
//     <form
//       action="#"
//       className="user-data-form mt-40 lg-mt-30"
//       onSubmit={handleSubmit}
//     >
//       <div className="row">
//         <div className="col-12">
//           <div className="input-group-meta mb-30">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="hasan@gmail.com"
//               required
//               value={dateLogin.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         {/* End .col-12 */}
//
//         <div className="col-12">
//           <div className="input-group-meta mb-25">
//             <label>Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Password"
//               className="pass_log_id"
//               required
//               value={dateLogin.password}
//               onChange={handleChange}
//             />
//             <span className="placeholder_icon" onClick={handleTogglePassword}>
//               <span className=" d-flex align-items-center">
//                 {showPassword ? (
//                   <>
//                     <i className="fa-regular fa-eye"></i>
//                   </>
//                 ) : (
//                   <>
//                     <i className=" fa-regular fa-eye-slash"></i>
//                   </>
//                 )}
//               </span>
//             </span>
//           </div>
//         </div>
//         {/* End .col-12 */}
//
//         <div className="col-12">
//           <div className="agreement-checkbox d-flex justify-content-between align-items-center">
//             {/*<div>*/}
//             {/*  <input type="checkbox" id="remember" />*/}
//             {/*  <label htmlFor="remember">Keep me logged in</label>*/}
//             {/*</div>*/}
//             <a href="#">Ai uitat parola?</a>
//           </div>
//           {/* /.agreement-checkbox */}
//         </div>
//         {/* End .col-12 */}
//
//         <div className="col-12">
//           <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
//             Login
//           </button>
//         </div>
//         {/* End .col-12 */}
//       </div>
//     </form>
//   );
// };
//
// export default LoginForm;
