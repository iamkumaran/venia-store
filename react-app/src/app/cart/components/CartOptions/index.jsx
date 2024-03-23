import React from 'react';

const CartOptions = () => {
  return (
    <div className="cartPage-price_adjustments_container-2Mx">
      <div className="priceAdjustments-root-3nS">
        <div className="accordion-root-2gj border-2 border-solid border-subtle rounded-md">
          <div className="section-root-190 border-b-2 border-solid border-subtle">
            <button
              aria-expanded="false"
              className="section-title_container-1sQ block cursor-pointer w-full m-0"
              type="button">
              <span className="section-title_wrapper-1L8 gap-sm grid grid-cols-1 grid-flow-col h-[4.5rem] items-center justify-items-start px-sm py-0">
                <span className="section-title-3PP text-lg">Estimate your Shipping</span>
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
            </button>
            <div className="section-contents_container_closed-2Co section-contents_container-2eM pb-sm pt-0 px-sm hidden">
              <div className="shippingMethods-root-n4M gap-xs grid">
                <p className="shippingMethods-message-eGH leading-normal text-sm">
                  For shipping estimates before proceeding to checkout, please provide the Country, State, and ZIP for
                  the destination of your order.
                </p>
                <h3 className="shippingForm-formTitle-2om font-semibold">Destination</h3>
                <form className="shippingForm-root-2hk gap-x-xs gap-y-sm grid">
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
                          className="select-input-2zN field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle disabled_pointer-events-none"
                          id="country-root-aoy"
                          name="country">
                          <option value="AF">Afghanistan</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua &amp; Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BA">Bosnia &amp; Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">British Indian Ocean Territory</option>
                          <option value="VG">British Virgin Islands</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="BQ">Caribbean Netherlands</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo - Brazzaville</option>
                          <option value="CD">Congo - Kinshasa</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czechia</option>
                          <option value="CI">Côte d’Ivoire</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="SZ">Eswatini</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">French Southern Territories</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">Heard &amp; McDonald Islands</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong SAR China</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="XK">Kosovo</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao SAR China</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar (Burma)</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestinian Territories</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn Islands</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="QA">Qatar</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="RE">Réunion</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">South Georgia &amp; South Sandwich Islands</option>
                          <option value="KR">South Korea</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="BL">St. Barthélemy</option>
                          <option value="SH">St. Helena</option>
                          <option value="KN">St. Kitts &amp; Nevis</option>
                          <option value="LC">St. Lucia</option>
                          <option value="MF">St. Martin</option>
                          <option value="PM">St. Pierre &amp; Miquelon</option>
                          <option value="VC">St. Vincent &amp; Grenadines</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard &amp; Jan Mayen</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="ST">São Tomé &amp; Príncipe</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad &amp; Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks &amp; Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UM">U.S. Outlying Islands</option>
                          <option value="VI">U.S. Virgin Islands</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican City</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="WF">Wallis &amp; Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                          <option value="AX">Åland Islands</option>
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
                    <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
                  </div>
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
                          className="select-input-2zN field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle disabled_pointer-events-none"
                          id="region-root-331"
                          name="region">
                          <option value="" disabled="" hidden="" />
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AS">American Samoa</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="AE">Armed Forces Africa</option>
                          <option value="AA">Armed Forces Americas</option>
                          <option value="AE">Armed Forces Canada</option>
                          <option value="AE">Armed Forces Europe</option>
                          <option value="AE">Armed Forces Middle East</option>
                          <option value="AP">Armed Forces Pacific</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District of Columbia</option>
                          <option value="FM">Federated States Of Micronesia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="GU">Guam</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PW">Palau</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VI">Virgin Islands</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
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
                    <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
                  </div>
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
                          className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                          id="postcode-root-25E"
                          name="zip"
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
                  <button
                    className="shippingForm-submit-1om button-root_normalPriority-F4F button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-brand-dark text-brand-dark active_border-brand-darkest active_text-brand-darkest hover_border-brand-darkest hover_text-brand-darkest justify-self-start"
                    type="submit">
                    <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                      Get Shipping Options
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="section-root-190 border-b-2 border-solid border-subtle">
            <button
              aria-expanded="false"
              className="section-title_container-1sQ block cursor-pointer w-full m-0"
              type="button">
              <span className="section-title_wrapper-1L8 gap-sm grid grid-cols-1 grid-flow-col h-[4.5rem] items-center justify-items-start px-sm py-0">
                <span className="section-title-3PP text-lg">Enter Coupon Code</span>
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
            </button>
            <div className="section-contents_container_closed-2Co section-contents_container-2eM pb-sm pt-0 px-sm hidden">
              <form className="couponCode-entryForm-1ub gap-x-sm grid grid-cols-autoLast">
                <div className="field-root-ffA content-start grid text-colorDefault">
                  <label
                    className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
                    htmlFor="couponCode">
                    Coupon Code
                  </label>
                  <span
                    className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
                    style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
                    <span className="fieldIcons-input-1wB items-center flex">
                      <input
                        placeholder="Enter code"
                        className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                        id="couponCode"
                        name="couponCode"
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
                <div className="field-root-ffA content-start grid text-colorDefault">
                  <label className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault" />
                  <button
                    className="button-root_normalPriority-F4F button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-brand-dark text-brand-dark active_border-brand-darkest active_text-brand-darkest hover_border-brand-darkest hover_text-brand-darkest"
                    type="submit">
                    <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                      Apply
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="section-root-190 border-b-2 border-solid border-subtle">
            <button
              aria-expanded="false"
              className="section-title_container-1sQ block cursor-pointer w-full m-0"
              type="button">
              <span className="section-title_wrapper-1L8 gap-sm grid grid-cols-1 grid-flow-col h-[4.5rem] items-center justify-items-start px-sm py-0">
                <span className="section-title-3PP text-lg">Apply Gift Card</span>
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
            </button>
            <div className="section-contents_container_closed-2Co section-contents_container-2eM pb-sm pt-0 px-sm hidden">
              <form>
                <div className="giftCards-root-3nk grid gap-md">
                  <div className="giftCards-entryForm-_NP">
                    <div className="giftCards-card-1qL gap-sm grid grid-cols-1 items-start lg_grid-cols-autoLast">
                      <div className="giftCards-entry-44V">
                        <label
                          className="field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault"
                          htmlFor="giftCards-card-1qL gap-sm grid grid-cols-1 items-start lg_grid-cols-autoLast">
                          Gift Card Number
                        </label>
                        <div className="giftCards-card_input_container-10J">
                          <span
                            className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
                            style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
                            <span className="fieldIcons-input-1wB items-center flex">
                              <input
                                placeholder="Enter card number"
                                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                                id="giftCards-card-1qL gap-sm grid grid-cols-1 items-start lg_grid-cols-autoLast"
                                name="card"
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
                        <span aria-live="polite">
                          <div className="giftCards-balance-QlV grid italic items-start pt-1.5 text-sm">
                            <span className="giftCards-invalid_card_error-1_i" />
                          </div>
                        </span>
                      </div>
                      <div className="field-root-ffA content-start grid text-colorDefault">
                        <label className="giftCards-applyLabel-2Bc field-label-2Ss flex font-semibold items-center justify-between leading-none px-0.5 py-2.5 text-colorDefault hidden lg_block" />
                        <button
                          className="button-root_normalPriority-F4F button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-brand-dark text-brand-dark active_border-brand-darkest active_text-brand-darkest hover_border-brand-darkest hover_text-brand-darkest"
                          type="button">
                          <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                            Apply
                          </span>
                        </button>
                      </div>
                      <button
                        className="giftCards-check_balance_button-36A linkButton-root-1df clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center font-semibold leading-tight max-w-full text-colorDefault text-brand-dark underline hover_text-colorDefault justify-self-center lg_justify-self-start"
                        type="button">
                        <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                          Check balance
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="section-root-190 border-b-2 border-solid border-subtle">
            <button
              aria-expanded="false"
              className="section-title_container-1sQ block cursor-pointer w-full m-0"
              type="button">
              <span className="section-title_wrapper-1L8 gap-sm grid grid-cols-1 grid-flow-col h-[4.5rem] items-center justify-items-start px-sm py-0">
                <span className="section-title-3PP text-lg">See Gift Options</span>
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
            </button>
            <div className="section-contents_container_closed-2Co section-contents_container-2eM pb-sm pt-0 px-sm hidden">
              <form className="giftOptions-root-n7x">
                <div className="giftOptions-option-rmL grid px-0 py-2">
                  <div>
                    <label className="checkbox-root-1vJ gap-3 grid grid-flow-col items-center justify-items-center leading-normal text-colorDefault">
                      <input
                        type="checkbox"
                        className="checkbox-input-33X appearance-none bg-transparent border-2 border-solid border-transparent cursor-pointer h-[1.5rem] rounded w-[1.5rem] disabled_cursor-not-allowed"
                        id="f37248f6-0403-4ce1-947d-8f4802b88e22"
                        name="includeGiftReceipt"
                      />
                      <span className="checkbox-icon-3mn h-[1.5rem] pointer-events-none w-[1.5rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                        </svg>
                      </span>
                      <span className="checkbox-label-1cy cursor-pointer justify-self-start text-colorDefault">
                        Include gift receipt
                      </span>
                    </label>
                    <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
                  </div>
                </div>
                <div className="giftOptions-option-rmL grid px-0 py-2">
                  <div>
                    <label className="checkbox-root-1vJ gap-3 grid grid-flow-col items-center justify-items-center leading-normal text-colorDefault">
                      <input
                        type="checkbox"
                        className="checkbox-input-33X appearance-none bg-transparent border-2 border-solid border-transparent cursor-pointer h-[1.5rem] rounded w-[1.5rem] disabled_cursor-not-allowed"
                        id="8c933047-59a8-45d6-995d-a77e5f0f113d"
                        name="includePrintedCard"
                      />
                      <span className="checkbox-icon-3mn h-[1.5rem] pointer-events-none w-[1.5rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                        </svg>
                      </span>
                      <span className="checkbox-label-1cy cursor-pointer justify-self-start text-colorDefault">
                        Add printed card
                      </span>
                    </label>
                    <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOptions;
