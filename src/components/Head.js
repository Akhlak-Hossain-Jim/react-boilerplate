import { Helmet } from "react-helmet";

function Head({ title, description, canonical }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      {/* <link rel="canonical" href={window.location.href} /> */}
    </Helmet>
  );
}

export default Head;
