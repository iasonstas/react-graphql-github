import React from 'react';

//Meta tags are very important for every page because they improve SEO. <Head></Head> in every page for advanced search bots.
export default function Header({ head }) {
  return (
    <>
      {/* <!--  Essential META Tags --> */}
      <meta property="og:title" content={`${head}- Title`} />
      <meta property="og:description" content={`${head}- description`} />
      <meta property="og:image" content={'image'} />
      <meta property="og:image:alt" content={'imageAlt'} />
      <meta property="og:url" content={'url'} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary" />
      {/* <!--  Non-Essential, But Recommended --> */}
      <meta property="og:site_name" content="tzimani.gr" />
      <meta property="twitter:title" content={'description'} />
      <meta property="twitter:description" content={'description'} />
      <meta property="twitter:image" content={'image'} />
      <meta name="twitter:image:alt" content={'imageAlt'} />
      <meta property="twitter:url" content={'url'} />
      {/* <!--  Non-Essential, But Required for Analytics --> */}
      <meta property="fb:app_id" content="" />
      <meta name="twitter:site" content="" />
    </>
  );
}
