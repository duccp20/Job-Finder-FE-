import React, { useState } from "react";

const AppliedJobItem = ({ image, title }) => {
  return (
    <div className="mb-[15px] rounded-[10px] border border-[#DEDEDE] px-[21px] py-[15px] hover:border-[#FE5656]">
      <div className="flex">
        <img
          src={image}
          alt=""
          className="mr-[20px] h-[90px] w-[90px] rounded-[8px] border border-[#7D7D7D] object-cover"
        />
        <div className="flex flex-grow flex-col justify-between">
          <h3 className="text-xl font-bold not-italic text-red-500">{title}</h3>
          <span>abc</span>
          <div className="flex items-baseline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
            >
              <g clip-path="url(#clip0_194_975)">
                <path
                  d="M5.32544 15.6748C3.6737 13.8549 0 9.44412 0 6.96658C0 3.96065 2.71999 1.52393 6.07536 1.52393C9.42947 1.52393 12.1507 3.96065 12.1507 6.96658C12.1507 9.44412 8.44855 13.8549 6.82529 15.6748C6.43609 16.1085 5.71464 16.1085 5.32544 15.6748ZM6.07536 8.7808C7.19234 8.7808 8.10048 7.96724 8.10048 6.96658C8.10048 5.96593 7.19234 5.15236 6.07536 5.15236C4.95838 5.15236 4.05024 5.96593 4.05024 6.96658C4.05024 7.96724 4.95838 8.7808 6.07536 8.7808Z"
                  fill="#FE5656"
                />
              </g>
              <defs>
                <clipPath id="clip0_194_975">
                  <rect width="19" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-light not-italic text-gray-800">
              hcm
            </span>
          </div>
        </div>
        {/* <div className="h-auto cursor-pointer self-start border border-[#F1F1F1] px-[15px] py-[12px]">
        </div> */}
      </div>
      <div className="flex items-end justify-between">
        <div className="flex items-start gap-[19px]">
          {/* <span className="inline-block bg-[#F3F9FC] p-[10px] text-xs font-semibold not-italic text-gray-600">
            FE
          </span>
          <span className="inline-block bg-[#F3F9FC] p-[10px] text-xs font-semibold not-italic text-gray-600">
            KHMT
          </span> */}
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                d="M7.875 16.5C7.875 16.5 6.75 16.5 6.75 15.125C6.75 13.75 7.875 9.625 12.375 9.625C16.875 9.625 18 13.75 18 15.125C18 16.5 16.875 16.5 16.875 16.5H7.875ZM12.375 8.25C13.2701 8.25 14.1286 7.8154 14.7615 7.04182C15.3944 6.26823 15.75 5.21902 15.75 4.125C15.75 3.03098 15.3944 1.98177 14.7615 1.20818C14.1286 0.434597 13.2701 0 12.375 0C11.4799 0 10.6214 0.434597 9.98851 1.20818C9.35558 1.98177 9 3.03098 9 4.125C9 5.21902 9.35558 6.26823 9.98851 7.04182C10.6214 7.8154 11.4799 8.25 12.375 8.25ZM5.868 16.5C5.70122 16.0707 5.61805 15.6001 5.625 15.125C5.625 13.2619 6.39 11.3438 7.803 10.01C7.09773 9.7444 6.36294 9.61451 5.625 9.625C1.125 9.625 0 13.75 0 15.125C0 16.5 1.125 16.5 1.125 16.5H5.868ZM5.0625 8.25C5.80842 8.25 6.52379 7.88784 7.05124 7.24318C7.57868 6.59852 7.875 5.72418 7.875 4.8125C7.875 3.90082 7.57868 3.02648 7.05124 2.38182C6.52379 1.73716 5.80842 1.375 5.0625 1.375C4.31658 1.375 3.60121 1.73716 3.07376 2.38182C2.54632 3.02648 2.25 3.90082 2.25 4.8125C2.25 5.72418 2.54632 6.59852 3.07376 7.24318C3.60121 7.88784 4.31658 8.25 5.0625 8.25Z"
                fill="#FE5656"
              />
            </svg>
            <span className="ml-[12px] text-base font-light not-italic text-[#2B3940]">
              Số lượng ứng viên:
            </span> */}
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M8.31031 4.79487C8.31031 4.36288 8.69359 4.01534 9.17 4.01534C9.64641 4.01534 10.0297 4.36288 10.0297 4.79487V8.79647L13.0852 10.6414C13.4792 10.8817 13.5866 11.3657 13.2929 11.723C13.0601 12.0802 12.5264 12.1777 12.1323 11.9113L8.69359 9.83259C8.45359 9.71566 8.31031 9.47206 8.31031 9.18298V4.79487ZM9.17 0.897217C14.235 0.897217 18.34 4.61948 18.34 9.21222C18.34 13.805 14.235 17.5272 9.17 17.5272C4.10501 17.5272 0 13.805 0 9.21222C0 4.61948 4.10501 0.897217 9.17 0.897217ZM1.71937 9.21222C1.71937 12.9442 5.05425 15.9682 9.17 15.9682C13.2858 15.9682 16.6206 12.9442 16.6206 9.21222C16.6206 5.48021 13.2858 2.45628 9.17 2.45628C5.05425 2.45628 1.71937 5.48021 1.71937 9.21222Z"
                fill="#FE5656"
              />
            </svg>
            <span className="ml-[12px] text-base font-light not-italic text-[#2B3940]">
              1/1/2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobItem;
