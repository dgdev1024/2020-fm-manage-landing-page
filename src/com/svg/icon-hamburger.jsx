import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={25} height={18} {...props}>
      <path
        d="M0 0h25v4H0zm0 7h25v4H0zm0 7h25v4H0z"
        fill="#242D52"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;
