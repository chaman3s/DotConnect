import React from 'react';

export const CloseSVG = ({ fillColor = '#000', className, ...props }) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props?.height || 20}
      width={props?.width || 20}
      viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
    >
      <path d="M4.7070312 3.2929688 L3.2929688 4.7070312 L8.5859375 10 L3.2929688 15.292969 L4.7070312 16.707031 L10 11.414062 L15.292969 16.707031 L16.707031 15.292969 L11.414062 10 L16.707031 4.7070312 L15.292969 3.2929688 L10 8.5859375 Z" />
    </svg>
  );
};
