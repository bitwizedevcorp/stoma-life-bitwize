"use client";
import { ChangeEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const UpdatePacientForm = (data: any) => {
  console.log(data);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    nume: data.data.first_name,
    prenume: data.data.last_name,
    email: data.data.email,
    telefon: data.data.telefon,
    cnp: data.data.cnp,
    date_of_birth: data.data.date_of_birth,
    judet: data.data.judet,
    town: data.data.town,
    street: data.data.street,
    number: data.data.number,
    bloc: data.data.bloc,
    scara: data.data.scara,
    apartament: data.data.apartament,
    istoricPacientId: data.data.istoricPacientId,
    doctorId: data.data.doctorId,
  });
  const [error, setError] = useState("");

  const notify = () =>
    toast("🦄 Pacient a fost updatat cu succes!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("🦄 Pacientul nu a fost updatat!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setFormValues({
      nume: "",
      prenume: "",
      email: "",
      telefon: "",
      cnp: "",
      date_of_birth: "",
      judet: "",
      town: "",
      street: "",
      number: "",
      bloc: "",
      scara: "",
      apartament: "",
      istoricPacientId: "",
      doctorId: data.doctorId,
    });
    try {
      const res = await fetch(`/api/edit-pacient/${data.data.id}`, {
        method: "PUT",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        notifyError();
        return;
      } else {
        notify();
      }

      // return alert("Pacient added!");
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
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={onSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Nume</label>
            <input
              type="text"
              placeholder="Popescu"
              required
              name="nume"
              value={formValues.nume}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Prenume</label>
            <input
              type="text"
              placeholder="Ion"
              required
              name="prenume"
              onChange={handleChange}
              value={formValues.prenume}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input
              type="text"
              placeholder="popescu@gmail.com"
              name="email"
              onChange={handleChange}
              value={formValues.email}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Numar de telefon</label>
            <input
              type="text"
              placeholder="07xxxxx"
              required
              name="telefon"
              onChange={handleChange}
              value={formValues.telefon}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Localitate</label>
            <input
              type="text"
              placeholder="Orastie"
              required
              name="town"
              onChange={handleChange}
              value={formValues.town}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Judet</label>
            <input
              type="text"
              placeholder="Hunedoara"
              required
              name="judet"
              onChange={handleChange}
              value={formValues.judet}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Data nasterii</label>
            <input
              type="text"
              placeholder="07-02-1999"
              required
              name="date_of_birth"
              value={formValues.date_of_birth}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>CNP</label>
            <input
              type="text"
              placeholder="123321321"
              required
              name="cnp"
              value={formValues.cnp}
              onChange={handleChange}
            />
          </div>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="col-12">
          <button
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30"
            type="submit"
          >
            {loading ? "loading..." : "Adauga Pacient"}
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="col-12">
        <div className="input-group-meta mb-30">
          <Link
            href="/contact"
            className="btn-twenty w-10 fw-100 tran3s text-uppercase mt-30"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Adauga un istoric detail despre acest pacient
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UpdatePacientForm;
