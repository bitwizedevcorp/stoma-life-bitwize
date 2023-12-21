import Link from "next/link";

const Pacienti = (data: any) => {
  return (
    <>
      {data.data.map((service: any, index: any) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay="250"
          key={index}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img
                src="/images/icon/icon_142.svg"
                alt="icon"
                className="lazy-img m-auto"
              />
            </div>
            <p className="fs-20 m0 pt-20">Pacient</p>
            <h4 className="tx-dark">
              {service.last_name} {service.first_name}
            </h4>
            <h3 className="tx-dark">Telefon: {service.telefon}</h3>
            <Link
              href={`/pacient/${service.id}`}
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pacienti;
