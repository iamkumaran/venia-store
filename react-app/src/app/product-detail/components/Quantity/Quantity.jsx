import React, { useState } from 'react';
import StepperIcon from '../../../../library/icons/StepperIcon';
import { QTY_LIMIT } from '../../../../utils/config/constants';

const Quantity = ({ setQty }) => {
  const [counter, setCounter] = useState(1);

  // increment/decrement the quantity
  const adjustQty = operator => {
    if (operator === '+') {
      setCounter(() => {
        const value = counter + 1;
        if (value > QTY_LIMIT) {
          return counter;
        }
        setQty(value);
        return value;
      });
    } else {
      setCounter(() => {
        const value = counter - 1;
        if (value < 1) {
          return counter;
        }
        setQty(value);
        return value;
      });
    }
  };
  return (
    <section className="productFullDetail-quantity-lZ3 productFullDetail-section-NVM border-solid border-subtle border-t-0 border-r-0 border-b border-l-0 my-0 mx-sm px-0 py-xs">
      <span className="productFullDetail-quantityTitle-OpI option-title-2h- block font-semibold leading-normal mb-sm text-colorDefault">
        Quantity
      </span>
      <div className="productFullDetail-quantityRoot-148 quantityStepper-root-39j gap-x-2xs grid items-center justify-items-center text-center justify-start">
        <label className="quantityStepper-label-1Sp" />
        <button
          onClick={() => adjustQty('-')}
          aria-label="Decrease Quantity"
          className="quantityStepper-button_decrement-1vA quantityStepper-button-BAm bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed"
          disabled=""
          type="button">
          <StepperIcon type="-" />
        </button>
        <span
          className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
          style={{ '--veniaSwatchBg': 0, '--iconsafter': 0 }}>
          <span className="fieldIcons-input-1wB items-center flex">
            <input
              aria-label="Item Quantity"
              inputMode="numeric"
              min={1}
              pattern="[0-9]*"
              className="quantityStepper-input-1RC textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle text-center"
              id="9d55987b-3512-41d1-b172-6e9431d9c006"
              name="quantity"
              readOnly
              value={counter}
            />
          </span>
          <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
          <span
            className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
            aria-hidden="false"
          />
        </span>
        <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
        <button
          onClick={() => adjustQty('+')}
          aria-label="Increase Quantity"
          className="quantityStepper-button_increment-1ih quantityStepper-button-BAm bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed"
          type="button">
          <StepperIcon type="+" />
        </button>
      </div>
    </section>
  );
};

export default Quantity;
