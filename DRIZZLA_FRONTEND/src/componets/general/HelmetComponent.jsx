import { Helmet } from 'react-helmet';


const HelmetComponent = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Drizzla</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content="https://example.com/og-image.jpg" /> */}
    </Helmet>
  );
};

export default HelmetComponent;
