import React from 'react';

const Spec = ({ specs, sku }) => {
  if (!specs.length || !sku) {
    return null;
  }
  return (
    <section className="productFullDetail-details-2Ih productFullDetail-section-NVM border-solid border-subtle border-t-0 border-r-0 border-b border-l-0 my-0 mx-sm px-0 py-xs lg_border-t lg_m-0 lg_pl-sm lg_pr-sm lg_self-stretch">
      <span className="productFullDetail-detailsTitle-3oa productFullDetail-sectionTitle-2sn flex font-semibold items-center leading-normal mb-sm text-colorDefault">
        Details
      </span>
      <div className="customAttributes-root-2bF">
        <ul className="customAttributes-list-2oi list-disc mb-4 mt-4 pl-6">
          {sku && (
            <li>
              <div className="text-label-3Hx font-bold inline-block mr-2">SKU</div>
              <div className="text-content-2IH inline-block">{sku}</div>
            </li>
          )}
          {specs.map(item => (
            <li key={item.attribute_metadata.uid}>
              <div className="multiselect-label-QTl font-bold inline-block mr-2">{item.attribute_metadata.label}</div>
              {item.selected_attribute_options.attribute_option.length > 0 && (
                <div className="multiselect-contentHtml-sLR inline">
                  {item.selected_attribute_options.attribute_option.map(opt => (
                    <div key={opt.uid} className="multiselect-option-3IB inline-block break-words">
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Spec;
