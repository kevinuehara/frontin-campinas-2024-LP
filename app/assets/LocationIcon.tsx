import * as React from "react";

export function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 18a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 5.999A3 3 0 0016 10z"
        fill="#F8F8F8"
      />
      <path
        d="M16 30l-8.436-9.949c-.117-.15-.233-.3-.348-.451A10.889 10.889 0 015 13a11 11 0 1122 0c.003 2.382-.775 4.7-2.215 6.597l-.001.003s-.3.394-.345.447L16 30zM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0025 13a9 9 0 00-18 0 8.904 8.904 0 001.812 5.395z"
        fill="#F8F8F8"
      />
    </svg>
  );
}

export default LocationIcon;
