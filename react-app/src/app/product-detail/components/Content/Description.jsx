import React from 'react';

const Description = ({ content }) => {
  return (
    <section className="productFullDetail-description-21i productFullDetail-section-NVM border-solid border-subtle border-t-0 border-r-0 border-b border-l-0 my-0 mx-sm px-0 py-xs lg_border-t lg_m-0 lg_pl-sm lg_pr-sm lg_self-stretch">
      <span className="productFullDetail-descriptionTitle-3f3 productFullDetail-sectionTitle-2sn flex font-semibold items-center leading-normal mb-sm text-colorDefault">
        Description
      </span>
      <div className="richContent-root-2XB" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};

export default Description;
