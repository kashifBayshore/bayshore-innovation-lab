
import React from 'react';

export const LeftDecoration = () => (
  <svg
    width="708"
    height="193"
    viewBox="0 0 708 193"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        @keyframes dash-animation-left {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 16;
          }
        }
        .dashed-line-left {
          animation: dash-animation-left 1s linear infinite;
        }
      `}
    </style>
    <g opacity="0.8">
      <path
        d="M0.5 0.5H72C376 0.5 408 96.5 707.5 96.5"
        stroke="url(#left_paint0)"
      />
      <path
        d="M0.5 192.5H72C376 192.5 408 96.5 707.5 96.5"
        stroke="url(#left_paint1)"
      />
      <path
        d="M0.5 36.1572H72C376 36.1572 408 96.5001 707.5 96.5001"
        stroke="url(#left_paint2)"
        strokeDasharray="4 4"
        className="dashed-line-left"
      />
      <path d="M707.5 96.5H0" stroke="url(#left_paint3)" />
      <path
        d="M0.5 156.843H72C376 156.843 408 96.4999 707.5 96.4999"
        stroke="url(#left_paint4)"
        strokeDasharray="4 4"
        className="dashed-line-left"
      />
    </g>
    <defs>
      <linearGradient
        id="left_paint0"
        x1="1"
        y1="96.5"
        x2="660"
        y2="96.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="left_paint1"
        x1="0.5"
        y1="144.5"
        x2="707.5"
        y2="144.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="left_paint2"
        x1="0.5"
        y1="66.3286"
        x2="707.5"
        y2="66.3286"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="left_paint3"
        x1="0"
        y1="96.9991"
        x2="657.5"
        y2="96.9991"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="left_paint4"
        x1="0.5"
        y1="126.671"
        x2="707.5"
        y2="126.671"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
    </defs>
  </svg>
);

export const RightDecoration = () => (
  <svg
    width="708"
    height="193"
    viewBox="0 0 708 193"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        @keyframes dash-animation-right {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 16;
          }
        }
        .dashed-line-right {
          animation: dash-animation-right 1s linear infinite;
        }
      `}
    </style>
    <g opacity="0.8">
      <path
        d="M707 0.5H635.5C331.5 0.5 299.5 96.5 0 96.5"
        stroke="url(#right_paint0)"
      />
      <path
        d="M707 192.5H635.5C331.5 192.5 299.5 96.5 0 96.5"
        stroke="url(#right_paint1)"
      />
      <path
        d="M707 36.1572H635.5C331.5 36.1572 299.5 96.5001 0 96.5001"
        stroke="url(#right_paint2)"
        strokeDasharray="4 4"
        className="dashed-line-right"
      />
      <path d="M0 96.5H707.5" stroke="url(#right_paint3)" />
      <path
        d="M707 156.843H635.5C331.5 156.843 299.5 96.4999 0 96.4999"
        stroke="url(#right_paint4)"
        strokeDasharray="4 4"
        className="dashed-line-right"
      />
    </g>
    <defs>
      <linearGradient
        id="right_paint0"
        x1="706.5"
        y1="96.5"
        x2="47.5"
        y2="96.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="right_paint1"
        x1="707"
        y1="144.5"
        x2="0"
        y2="144.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="right_paint2"
        x1="707"
        y1="66.3286"
        x2="0"
        y2="66.3286"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="right_paint3"
        x1="707.5"
        y1="96.9991"
        x2="50"
        y2="96.9991"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
      <linearGradient
        id="right_paint4"
        x1="707"
        y1="126.671"
        x2="0"
        y2="126.671"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#03C5CE" />
      </linearGradient>
    </defs>
  </svg>
);
