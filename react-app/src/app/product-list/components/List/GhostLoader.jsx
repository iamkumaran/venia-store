import React from 'react';

const GhostLoader = () => {
  const file = document.head.querySelector('meta[name=preload]')?.content;
  const ghostData = [
    { name: '', uid: 123, file },
    { name: '', uid: 12345, file },
    { name: '', uid: 12345678, file },
  ];
  return (
    <div className="gallery-items-3dc gap-xs grid mb-3">
      {ghostData.map((item, i) => (
        <div key={item.uid} className="item-root-2AI content-start grid gap-y-2xs">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a aria-label={item.name} className="item-images-2Jh grid" href="#" style={{ pointerEvents: 'none' }}>
            <div className="item-imageContainer-2bp image-container-2U5 relative">
              <img
                loading={[0, 1, 2].includes(i) ? 'eager' : 'lazy'}
                aria-hidden="true"
                alt={item.name}
                className="item-image-3Wd block h-full object-contain w-full image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent"
                height={375}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg=="
                width={840}
              />
              <img
                loading={[0, 1, 2].includes(i) ? 'eager' : 'lazy'}
                fetchPriority={[0, 1, 2].includes(i) ? 'high' : null}
                alt={item.name}
                className="item-image-3Wd block h-full object-contain w-full item-imageLoaded-2Dq image-loaded-3O9 absolute left-0 top-0 opacity-100"
                sizes="(max-width: 640px) 300px, 840px"
                src={file}
                width={840}
              />
            </div>
          </a>
          <a className="item-name-1cZ font-semibold text-colorDefault" href="#" style={{ pointerEvents: 'none' }}>
            <span>&nbsp;</span>
          </a>
          <div className="item-price-1Qq text-colorDefault">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="item-actionsContainer-2rd gap-x-xs grid pl-2xs">
            <button
              style={{ pointerEvents: 'none' }}
              className="addToCartButton-root-vwC button-root_highPriority-1Zl button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-brand-dark border-brand-dark text-white active_bg-brand-darkest active_border-brand-darkest active_text-white hover_bg-brand-darkest hover_border-brand-darkest hover_text-white min-w-[6.125rem] -ml-2xs px-2xs py-0 self-center sm_min-w-[8rem]"
              type="button"
              aria-label="Add to cart">
              <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                <span className="icon-root-2x9 items-center inline-flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="addToCartButton-icon-bKz inline stroke-white xs_hidden">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </span>
                <span className="addToCartButton-text-3eM hidden xs_inline"> </span>
              </span>
            </button>
            <button
              className="addToListButton-root-3FX gap-x-2xs inline-flex items-center min-w-[3rem]"
              type="button"
              aria-label="Add to Favorites">
              <span className="icon-root-2x9 items-center inline-flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-icon-_rq">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GhostLoader;
