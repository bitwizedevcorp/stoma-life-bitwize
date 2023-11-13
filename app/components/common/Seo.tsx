import Head from "next/head";

const Seo = ({ pageTitle }: { pageTitle: string }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} || Bitwize Development`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
