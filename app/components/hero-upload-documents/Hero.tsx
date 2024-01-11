"use client";
import { useState } from "react";
import notify from "@/app/components/notify/notify";
import notifyError from "@/app/components/notify/notifyError";

const Hero = (id: any) => {
  const [inputValue, setInputValue] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!inputValue) return;

    setUploading(true);
    const formData = new FormData();

    formData.append("file", inputValue);
    formData.append("pacientId", id.pacientId.pacientId);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      notify("Documentul a fost incarcat cu succes!");
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      notifyError("Documentul nu a fost incarcat!");
    }
    // Code for handling form submission
  };

  const handlerFileChange = (e: any) => {
    setInputValue(e.target.files[0]);
  };

  const content = {
    heading: "Poti vedea documentele pacientului",
    subheading: "Poti vizuliza fiecare radiografie",
    btnText: "Incarca",
  };

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
        <form onSubmit={handleFormSubmit} className="position-relative">
          <input type="file" onChange={handlerFileChange} />
          <button
            type="submit"
            className="tran3s position-absolute fw-500"
            disabled={!inputValue || uploading}
          >
            {uploading ? " Uploading..." : content.btnText}
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
