import React from 'react';

const CheckBoxIcon = ({ isSelected }) => (
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
      {/* no select */}
      {!isSelected && <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />}

      {/* selected */}
      {isSelected && (
        <>
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </>
      )}
    </svg>
  </span>
);

export default CheckBoxIcon;
