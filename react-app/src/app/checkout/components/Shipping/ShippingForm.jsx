import React from 'react';

const ShippingForm = () => {
  return (
    <form className="guestForm-root-3Go gap-x-2xs gap-y-sm grid grid-cols-2 w-full">
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
                autoComplete="Country"
                aria-label="Country Required"
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
                autoComplete="Street Address"
                aria-label="Street Address Required"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="street0"
                name="street[0]"
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
                autoComplete="Street Address 2"
                className="textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle"
                id="street1"
                name="street[1]"
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
                autoComplete="State"
                aria-label="State Required"
                className="select-input-2zN field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle disabled_pointer-events-none"
                id="region-root-331"
                name="region[region_id]">
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
