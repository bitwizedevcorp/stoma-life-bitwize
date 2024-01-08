import DefaultHeader from "@/app/components/header/DefaultHeader";
import Seo from "@/app/components/common/Seo";
import Pacienti from "@/app/components/pacienti/pacienti";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

async function getPacientiByDoctor(doctorId: any) {
  const data = await prisma.pacient.findMany({
    where: {
      doctorId: doctorId,
    },
  });
  if (!data) {
    return null;
  }

  return data;
}
const PacientiiTai = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const data = await getPacientiByDoctor(user.id);
  return (
    <>
      <Seo pageTitle="Pacientii tai" />
      <DefaultHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Pacientii tai
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Selecteaza un pacient si il poti modifica.
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5">
            <Pacienti data={data} />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="icon"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default PacientiiTai;
