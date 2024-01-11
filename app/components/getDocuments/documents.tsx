"use server";
import { useState } from "react";
import notify from "@/app/components/notify/notify";
import notifyError from "@/app/components/notify/notifyError";
import Link from "next/link";
import axios from "axios";
async function getDocuments(id: any) {
  const res = await axios.post(
    "http://localhost:3000/api/documente-by-pacient",
    {
      id: id,
    },
  );
  if (res.status === 200) {
    console.log(res.data);
    const result = res.data;
    return result;
  } else {
    notifyError("Ceva nu a mers bine!");
  }
}
const Documents = async (id: any) => {
  const content = {
    heading: "Poti vedea documentele pacientului",
    subheading: "Poti vizuliza fiecare radiografie",
    btnText: "Incarca",
  };
  const data = await getDocuments(id.pacientId.pacientId);
  console.log("DATA AICI", data);

  return (
    <>
      <h1 className="hero-heading fw-light tx-dark">
        <span className="position-relative">{content.heading}</span>
      </h1>
      <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
        {content.subheading}
      </p>
      <div
        className="subscribe-form m-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="position-relative">
          {data.data ? (
            data.data.map((post: any, index: number) => (
              <div
                className="col-md-6 d-flex"
                key={index + 1}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <article
                  className="blog-meta-five d-flex flex-column position-relative tran3s mb-60 lg-mb-50 wow fadeInUp"
                  id={`post-${post.id}`}
                >
                  <div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="tag text-uppercase fw-500 tran3s"
                    >
                      {"Documentul"}
                    </Link>
                  </div>
                  <br />
                  <div className="blog-date fw-500 tx-dark">
                    {"Radiografia" + " "}
                    <Link href={post.url} className="fw-normal tran3s">
                      Vizualizati
                    </Link>
                  </div>
                  <div className="post-data mt-30 mb-100 lg-mb-50">
                    <Link href={`/blog/${post.id}`}>
                      <h4 className="tran3s blog-title">{post.istoric}</h4>
                    </Link>
                  </div>
                  <div className="blog-footer d-flex align-items-center justify-content-between mt-auto">
                    <div className="blog-date fw-500 tx-dark">
                      {"Created on -"}
                      <a href="#" className="fw-normal tran3s">
                        {post.createdAt}
                      </a>
                    </div>
                  </div>
                  {/* /.blog-footer */}
                </article>
                {/* /.blog-meta-five */}
              </div>
              /* End .col-md-6 */
            ))
          ) : (
            <p>Pacientul nu are documente </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Documents;
