import React from 'react';

const MiniCart = () => {
  return (
    <div className="header-secondaryActions-2BM col-start-3 grid grid-flow-col items-center justify-items-end justify-self-end w-max lg_col-end-13 lg_col-start-10 lg_gap-x-4">
      <div className="cartTrigger-triggerContainer-2Jd hidden items-center h-lg lg_grid">
        <button
          type="button"
          aria-expanded="false"
          aria-label="Toggle mini cart. You have 0 items in your cart."
          className="cartTrigger-trigger-1c5 clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center content-center flex h-[3rem] justify-center relative z-foreground">
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
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1={3} y1={6} x2={21} y2={6} />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>
          <span className="cartTrigger-counter-2ju absolute bg-brand-dark font-semibold leading-tight left-sm min-w-[1.25rem] px-1 py-0 rounded-full text-sm text-white top-1.5">
            15
          </span>
        </button>
      </div>
      {/* <button
        type="button"
        aria-expanded="false"
        aria-label="Toggle mini cart. You have 0 items in your cart."
        className="cartTrigger-link-2Eb cartTrigger-trigger-1c5 clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center content-center flex h-[3rem] justify-center min-w-[3rem] relative z-foreground flex lg_hidden">
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
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1={3} y1={6} x2={21} y2={6} />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </span>
      </button>
      <aside className="miniCart-root-3Wu absolute h-0 left-[-100vw] max-w-[100vw] opacity-0 overflow-visible top-full z-menu">
        <div className="miniCart-contents-1wD absolute bg-white grid max-h-[35rem] overflow-hidden right-0 rounded-sm top-0 w-[22.5rem]">
          <div className="miniCart-emptyCart-2yu gap-md grid p-md">
            <div className="miniCart-emptyMessage-6kQ font-bold m-auto">
              There are no items in your cart.
              <span hidden="" role="status" aria-hidden="false" aria-live="polite">
                There are no items in your cart.
              </span>
            </div>
          </div>
        </div>
      </aside> */}
    </div>
  );
};

export default MiniCart;
