"use client";
import { ChangeEvent, useState } from "react";
import notifyError from "@/app/components/notify/notifyError";
import notify from "@/app/components/notify/notify";
const AdaugaIstoricForm = (istoricPacientObject: any) => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    numePacient: istoricPacientObject.pacientData.numePacient,
    prenumePacient: istoricPacientObject.pacientData.prenumePacient,
    pacientId: istoricPacientObject.pacientData.pacientId,
    doctorId: istoricPacientObject.pacientData.doctorId,
    lucrare: "",
    data: "",
    istoric: "",
  });
  const [error, setError] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setFormValues({
      numePacient: istoricPacientObject.pacientData.numePacient,
      prenumePacient: istoricPacientObject.pacientData.prenumePacient,
      pacientId: istoricPacientObject.pacientData.pacientId,
      doctorId: istoricPacientObject.pacientData.doctorId,
      lucrare: "",
      data: "",
      istoric: "",
    });
    try {
      const res = await fetch(`/api/add-istoric`, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res) {
        notifyError("Istoricul nu a fost adaugat");
        throw new Error("istoricul nu a fost salvat");
      } else {
        notify("Istoricul a fost adaugat");
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
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={onSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Lucrare*"
                name="lucrare"
                data-error="Tipul lucrarii e obligatoriu."
                value={formValues.lucrare}
                onChange={handleChange}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="text"
                placeholder="Data*"
                name="data"
                data-error="Valid data is required."
                value={formValues.data}
                onChange={handleChange}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                placeholder="Adauga Informatii*"
                name="istoric"
                data-error="Please,leave us a message."
                value={formValues.istoric}
                onChange={handleChange}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block">
              Adauga
            </button>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default AdaugaIstoricForm;
