import Head from "next/head";

const SEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  plaintext,
  conicalurl,
}) => {
   
  return (
   <>
   <head>
   <meta property="title" content={title || "Default Title"} />
        <meta property="description" content={description || "Default Title"} />
        <meta property="og:title" content={ogTitle || "Default Title"} />
        <meta
          property="og:description"
          content={ogDescription || "Default Description"}
        />
        <meta name="plaintext" content={plaintext || ""} />
        <link rel="canonical" href={conicalurl || "https://yourwebsite.com"} />
       
   </head>
   
   </>
  );
};

export default SEO;
