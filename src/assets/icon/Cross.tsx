import React from 'react';

const Cross = ({width= '14px', height= '14px', stroke='#1976D2'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19M5.00001 5L19 19" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Cross;