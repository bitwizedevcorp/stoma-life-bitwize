import Link from "next/link";
import posts from "./data";
import dbMongoConnect from "@/app/lib/mongodb";
import { istoricPacient, IistoricPacient } from "@/models";

async function istoricPacientFunction(pacientId) {
  await dbMongoConnect();
  try {
    const istoricPacientMongo = await istoricPacient.find({
      pacientId: pacientId,
    });
    if (!istoricPacient) {
      console.log("nu are istoric");
    }
    return istoricPacientMongo;
  } catch (e) {
    console.log(e);
  }
}
const IstoricInfo = async (id) => {
  const data = await istoricPacientFunction(id.id);
  console.log(data);
  return (
    <>
      {data ? (
        data.map((post) => (
          <div
            className="col-md-6 d-flex"
            key={post._id}
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
                  {post.numePacient + " " + post.prenumePacient}
                </Link>
              </div>
              <br />
              <div className="blog-date fw-500 tx-dark">
                {"Tipul lucracrii" + " "}
                <a className="fw-normal tran3s">{post.lucrare}</a>
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
                    {post.data}
                  </a>
                </div>
                <p className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </p>
              </div>
              {/* /.blog-footer */}
            </article>
            {/* /.blog-meta-five */}
          </div>
          /* End .col-md-6 */
        ))
      ) : (
        <p>Pacientul nu are istoric </p>
      )}
    </>
  );
};

export default IstoricInfo;
