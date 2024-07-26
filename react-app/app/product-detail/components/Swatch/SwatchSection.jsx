import React, { Fragment } from 'react';
import SwatchColor from './SwatchColor';
import SwatchSize from './SwatchSize';

const SwatchSection = ({ data, setColor, setSize, handler }) => {
  if (!data?.length) {
    return null;
  }
  return (
    <section className="productFullDetail-options-riy">
      {data.map(item => (
        <Fragment key={item.uid}>
          {item.attribute_code === 'fashion_color' && <SwatchColor item={item} setColor={setColor} handler={handler} />}
          {item.attribute_code === 'fashion_size' && <SwatchSize item={item} setSize={setSize} handler={handler} />}
        </Fragment>
      ))}
    </section>
  );
};

export default SwatchSection;
