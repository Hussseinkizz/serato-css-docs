import Head from 'next/head';


//todo: use next-seo package for this!

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
     <link
        rel="shortcut icon"
        href="../public/favicon.ico"
        type="image/x-icon"
      /> 
      
      <title>{title} | {description}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Serato CSS',
  keywords: 'framework, css, sass, serato css',
  description: 'A Modern CSS framework full of handy sass deejay mixins!',
};

export default Meta;
