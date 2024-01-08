import Seo from "@/app/components/common/Seo";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import { prisma } from "@/app/lib/prisma";
import UpdatePacientForm from "@/app/components/common/pacienti/updatePacientForm";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";
async function getPacientById(id: any) {
  const data = prisma.pacient.findFirst({
    where: {
      id: id,
    },
  });

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
const Pacient = async ({ params }: any) => {
  const { id } = params;
  const data = await getPacientById(parseInt(id));

  return (
    <>
      <DefaultHeader />
      <Seo pageTitle="Update Pacient" />
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Update Pacient</h2>
            {/*<p className="fs-20 tx-dark">*/}
            {/*  Still don&lsquo;t have an account?{" "}*/}
            {/*  <Link href="/signup">Sign up</Link>*/}
            {/*</p>*/}
          </div>
          <UpdatePacientForm data={data} />
        </div>
        {/* End form-wrapper */}
        {/*<p className="mt-auto pt-50">Copyright @{currentYear} Bitwize inc.</p>*/}
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
      <div className="footer-style-two theme-basic-footer">
        <CopyrightFooter />
      </div>
    </>
  );
};

export default Pacient;
