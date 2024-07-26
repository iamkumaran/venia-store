import React from 'react';
import { useMutation } from 'urql';
import SET_GUEST_SHIPPING_MUTATION from '../../../../utils/gql/mutations/set-guest-shipping.gql';
import { getCartIdFromStorage } from '../../../../utils/helper';

const ShippingForm = () => {
  const [, submitShippingMutation] = useMutation(SET_GUEST_SHIPPING_MUTATION);
  const formOnSubmitHandler = e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(document.querySelector('#shipping-form')).entries());
    // eslint-disable-next-line camelcase
    const { street0, street1, email, firstname, lastname, city, postcode, telephone, country_code, region } = formData;

    const variable = {
      cartId: getCartIdFromStorage(),
      email,
      address: {
        street: [street0, street1],
        firstname,
        lastname,
        city,
        postcode,
        telephone,
        // eslint-disable-next-line camelcase
        country_code,
        region,
      },
    };
    submitShippingMutation(variable)
      .then(r => {
        console.log(r);
      })
      .catch(err => {
        alert('Something went wrong.');
        console.error('Something went wrong in submitting shipping form => ', err);
      });
  };
  return (
    <form
      id="shipping-form"
      className="guestForm-root-3Go gap-x-2xs gap-y-sm grid grid-cols-2 w-full"
      onSubmit={formOnSubmitHandler}>
      <div className="guestForm-email-Ygv guestForm-field-3nm col-end-span2">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="email">
            Email
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                autoComplete="Shipping Email"
                aria-label="Email Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="email"
                name="email"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm">
            Set a password at the end of guest checkout to create an account in one easy step.
          </p>
        </div>
      </div>
      <div className="guestForm-firstname-3nu col-end-span1">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="firstname">
            First Name
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="text"
                required
                autoComplete="First Name"
                aria-label="First Name Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="firstname"
                name="firstname"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-lastname-1oz col-end-span1">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="lastname">
            Last Name
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="text"
                required
                autoComplete="Last Name"
                aria-label="Last Name Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="lastname"
                name="lastname"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-country-3Sk guestForm-field-3nm col-end-span2">
        <div className="country-root-aoy">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="country-root-aoy">
            Country
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 1 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <select
                required
                autoComplete="Country"
                aria-label="Country Required"
                className="select-input-2zN field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle disabled_pointer-events-none"
                id="country-root-aoy"
                name="country_code">
                <option value="US" selected>
                  United States
                </option>
              </select>
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false">
              <span className="icon-root-2x9 items-center inline-flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-icon-_rq">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </span>
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-street0-6u4 guestForm-field-3nm col-end-span2">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="street0">
            Street Address
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="text"
                required
                autoComplete="Street Address"
                aria-label="Street Address Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="street0"
                name="street0"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
        </div>
      </div>
      <div className="guestForm-street1-3Lg guestForm-field-3nm col-end-span2">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="street1">
            Street Address 2<span className="field-optional-1pS font-normal text-sm text-subtle">Optional</span>
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="text"
                autoComplete="Street Address 2"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="street1"
                name="street1"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-city-2g9 guestForm-field-3nm col-end-span2">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="city">
            City
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="text"
                required
                autoComplete="City"
                aria-label="City Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="city"
                name="city"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-region-_eV guestForm-field-3nm col-end-span2">
        <div className="region-root-331">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="region-root-331">
            State
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 1 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <select
                required
                autoComplete="State"
                aria-label="State Required"
                className="select-input-2zN field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle disabled_pointer-events-none"
                id="region-root-331"
                name="region">
                <option value="" disabled="" hidden="" />
                <option value={3}>Alabama</option>
                <option value={6}>Alaska</option>
                <option value={9}>American Samoa</option>
                <option value={12}>Arizona</option>
                <option value={15}>Arkansas</option>
                <option value={18}>Armed Forces Africa</option>
                <option value={21}>Armed Forces Americas</option>
                <option value={24}>Armed Forces Canada</option>
                <option value={27}>Armed Forces Europe</option>
                <option value={30}>Armed Forces Middle East</option>
                <option value={33}>Armed Forces Pacific</option>
                <option value={36}>California</option>
                <option value={39}>Colorado</option>
                <option value={42}>Connecticut</option>
                <option value={45}>Delaware</option>
                <option value={48}>District of Columbia</option>
                <option value={51}>Federated States Of Micronesia</option>
                <option value={54}>Florida</option>
                <option value={57}>Georgia</option>
                <option value={60}>Guam</option>
                <option value={63}>Hawaii</option>
                <option value={66}>Idaho</option>
                <option value={69}>Illinois</option>
                <option value={72}>Indiana</option>
                <option value={75}>Iowa</option>
                <option value={78}>Kansas</option>
                <option value={81}>Kentucky</option>
                <option value={84}>Louisiana</option>
                <option value={87}>Maine</option>
                <option value={90}>Marshall Islands</option>
                <option value={93}>Maryland</option>
                <option value={96}>Massachusetts</option>
                <option value={99}>Michigan</option>
                <option value={102}>Minnesota</option>
                <option value={105}>Mississippi</option>
                <option value={108}>Missouri</option>
                <option value={111}>Montana</option>
                <option value={114}>Nebraska</option>
                <option value={117}>Nevada</option>
                <option value={120}>New Hampshire</option>
                <option value={123}>New Jersey</option>
                <option value={126}>New Mexico</option>
                <option value={129}>New York</option>
                <option value={132}>North Carolina</option>
                <option value={135}>North Dakota</option>
                <option value={138}>Northern Mariana Islands</option>
                <option value={141}>Ohio</option>
                <option value={144}>Oklahoma</option>
                <option value={147}>Oregon</option>
                <option value={150}>Palau</option>
                <option value={153}>Pennsylvania</option>
                <option value={156}>Puerto Rico</option>
                <option value={159}>Rhode Island</option>
                <option value={162}>South Carolina</option>
                <option value={165}>South Dakota</option>
                <option value={168}>Tennessee</option>
                <option value={171}>Texas</option>
                <option value={174}>Utah</option>
                <option value={177}>Vermont</option>
                <option value={180}>Virgin Islands</option>
                <option value={183}>Virginia</option>
                <option value={186}>Washington</option>
                <option value={189}>West Virginia</option>
                <option value={192}>Wisconsin</option>
                <option value={195}>Wyoming</option>
              </select>
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false">
              <span className="icon-root-2x9 items-center inline-flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-icon-_rq">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </span>
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-postcode-3Vu guestForm-field-3nm col-end-span2">
        <div className="postcode-root-25E">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="postcode-root-25E">
            ZIP / Postal Code
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                required
                autoComplete="ZIP / Postal Code"
                aria-label="ZIP / Postal Code Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="postcode-root-25E"
                name="postcode"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-telephone-17O guestForm-field-3nm col-end-span2">
        <div className="field-root-ffA content-start grid text-colorDefault">
          <label
            className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
            htmlFor="telephone">
            Phone Number
          </label>
          <span
            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
            <span className="fieldIcons-input-1wB items-center flex">
              <input
                type="number"
                required
                autoComplete="Phone Number"
                aria-label="Phone Number Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="telephone"
                name="telephone"
                defaultValue=""
              />
            </span>
            <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
            <span
              className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
              aria-hidden="false"
            />
          </span>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm"></p>
        </div>
      </div>
      <div className="guestForm-buttons-2En guestForm-field-3nm col-end-span2 gap-xs grid grid-flow-col justify-self-center p-xs">
        <button
          className="button-root_normalPriority-F4F button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-brand-dark text-brand-dark active_border-brand-darkest active_text-brand-darkest hover_border-brand-darkest hover_text-brand-darkest"
          type="submit">
          <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
            Continue to Shipping Method
          </span>
        </button>
      </div>
    </form>
  );
};

export default ShippingForm;
