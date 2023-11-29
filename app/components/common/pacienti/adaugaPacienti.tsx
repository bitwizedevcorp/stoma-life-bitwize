import { useState } from "react";

const AdaugaPacientForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Nume</label>
            <input type="text" placeholder="Popescu" required />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Prenume</label>
            <input type="text" placeholder="Ion" required />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input type="text" placeholder="popescu@gmail.com" required />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Numar de telefon</label>
            <input type="text" placeholder="07xxxxxxx" required />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Localitate</label>
            <input type="text" placeholder="Orastie" required />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Judet</label>
            <input type="text" placeholder="Hunedoara" required />
          </div>
        </div>

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Adauga
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default AdaugaPacientForm;
