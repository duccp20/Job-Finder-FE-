import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import Pagination from "../../components/Pagination";
import useDataFetcher from "../../components/Pagination/useDataFetcher";
import PopupHr from "../../components/PopupHr";

const RecruitmentList = (props) => {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-screen">
      <PopupHr></PopupHr>
      <HeaderHome></HeaderHome>
      <div className="border w-[87%] h-full rounded-[10px] shadow-custom mx-auto my-[90px] px-[40px] pt-[30px] pb-[44px]">
        <h2 className="text-xl not-italic font-bold mb-[20px]">Thống kê tin</h2>
        <div className="flex justify-between">
          <div className="flex  w-[59%] mb-[20px]">
            <div className="bg-[#F1F1F1] p-[20px] mr-[24px] w-[30%] ">
              <p className="text-[#FE5656] text-2xl not-italic font-bold">
                {/* {props.total}  */} 30
              </p>
              <p className="text-black text-base not-italic font-normal">
                Tổng số tin đăng
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-[20px] mr-[24px] w-[30%]">
              <p className="text-[#FE5656] text-2xl not-italic font-bold">
                {/* {props.open}  */} 3
              </p>
              <p className="text-black text-base not-italic font-normal">
                Tin đang mở
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-[20px] mr-[24px] w-[30%]">
              <p className="text-[#FE5656] text-2xl not-italic font-bold">
                {/* {props.closed}  */} 27
              </p>
              <p className="text-black text-base not-italic font-normal">
                Tin đã đóng
              </p>
            </div>
          </div>
          <div className="bg-[#FE5656]  flex gap-[15px] h-[45px] items-center px-[20px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                d="M18 0.5H2C0.89 0.5 0.00999999 1.39 0.00999999 2.5L0 14.5C0 15.61 0.89 16.5 2 16.5H12V14.5H2V8.5H20V2.5C20 1.39 19.11 0.5 18 0.5ZM18 4.5H2V2.5H18V4.5ZM22 13.5V15.5H19V18.5H17V15.5H14V13.5H17V10.5H19V13.5H22Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-base not-italic font-bold ">
              Đăng tin tuyển dụng mới
            </span>
          </div>
        </div>

        <h2 className="text-xl not-italic font-bold mb-[12px]">
          Danh sách tin tuyển dụng
        </h2>
        <div className="flex w-full gap-[13px] justify-between mb-[30px] ">
          <div className="px-[13px] py-[12px] items-center flex border rounded w-[40%]">
            <label htmlFor="find">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                className="mr-1"
              >
                <g clip-path="url(#clip0_491_4906)">
                  <path
                    d="M18.5658 17.332L14.1238 12.6562C15.1339 11.0777 15.6323 9.10546 15.3655 7.00389C14.9105 3.42928 12.1273 0.520299 8.72808 0.0672912C3.67416 -0.605873 -0.575609 3.86756 0.0639337 9.18749C0.494402 12.7672 3.25831 15.6992 6.65456 16.1758C8.65104 16.4566 10.5251 15.9322 12.0243 14.8687L16.4663 19.5445C17.0459 20.1547 17.9859 20.1547 18.5656 19.5445C19.1447 18.9336 19.1447 17.9414 18.5658 17.332ZM2.93531 8.12499C2.93531 5.36796 5.06613 3.12499 7.68531 3.12499C10.3045 3.12499 12.4353 5.36796 12.4353 8.12499C12.4353 10.882 10.3045 13.125 7.68531 13.125C5.06613 13.125 2.93531 10.8828 2.93531 8.12499Z"
                    fill="#FE5656"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_491_4906">
                    <rect width="19" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <input
              type="text"
              name="find"
              id="find"
              placeholder="Tìm kiếm nhanh"
              className="w-full"
            />
          </div>

          <div className="w-[45%] flex gap-[13px]">
            <div className="px-[13px] py-[12px] items-center flex border rounded w-[33%]">
              <label htmlFor="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  className="mr-[10px]"
                >
                  <path
                    d="M6.16629 18.5731C4.25375 16.1845 0 10.3953 0 7.14349C0 3.1982 3.14946 0 7.03463 0C10.9183 0 14.0693 3.1982 14.0693 7.14349C14.0693 10.3953 9.78253 16.1845 7.90297 18.5731C7.45231 19.1423 6.61695 19.1423 6.16629 18.5731ZM7.03463 9.52465C8.32798 9.52465 9.37951 8.45685 9.37951 7.14349C9.37951 5.83013 8.32798 4.76232 7.03463 4.76232C5.74129 4.76232 4.68975 5.83013 4.68975 7.14349C4.68975 8.45685 5.74129 9.52465 7.03463 9.52465Z"
                    fill="#FE5656"
                  />
                </svg>
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Địa điểm"
                className="w-[100px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M6.18166 6.60553C5.91803 6.60553 5.65427 6.51338 5.45336 6.32907L0.301847 1.61084C-0.100616 1.24222 -0.100616 0.645072 0.301847 0.276459C0.704309 -0.0921531 1.3563 -0.0921531 1.75876 0.276459L6.18166 4.32898L10.6055 0.277196C11.008 -0.091416 11.66 -0.091416 12.0624 0.277196C12.4649 0.645809 12.4649 1.24296 12.0624 1.61157L6.91092 6.32981C6.70969 6.51412 6.44567 6.60553 6.18166 6.60553Z"
                  fill="#FE5656"
                />
              </svg>
            </div>

            <div className="px-[13px] py-[12px] items-center flex border rounded w-[33%]">
              <label htmlFor="deadline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  className="mr-[10px]"
                >
                  <path
                    d="M18 10.11V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H8.11C9.37 21.24 11.09 22 13 22C16.87 22 20 18.87 20 15C20 13.09 19.24 11.37 18 10.11ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM2 18V4H4V6H14V4H16V8.68C15.09 8.25 14.08 8 13 8H4V10H8.1C7.5 10.57 7.04 11.25 6.68 12H4V14H6.08C6.03 14.33 6 14.66 6 15C6 16.08 6.25 17.09 6.68 18H2ZM13 20C10.24 20 8 17.76 8 15C8 12.24 10.24 10 13 10C15.76 10 18 12.24 18 15C18 17.76 15.76 20 13 20ZM13.5 15.25L16.36 16.94L15.61 18.16L12 16V11H13.5V15.25Z"
                    fill="#FE5656"
                  />
                </svg>
              </label>
              <input
                type="text"
                name="deadline"
                id="deadline"
                placeholder="Hạn nộp"
                className="w-[100px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M6.18166 6.60553C5.91803 6.60553 5.65427 6.51338 5.45336 6.32907L0.301847 1.61084C-0.100616 1.24222 -0.100616 0.645072 0.301847 0.276459C0.704309 -0.0921531 1.3563 -0.0921531 1.75876 0.276459L6.18166 4.32898L10.6055 0.277196C11.008 -0.091416 11.66 -0.091416 12.0624 0.277196C12.4649 0.645809 12.4649 1.24296 12.0624 1.61157L6.91092 6.32981C6.70969 6.51412 6.44567 6.60553 6.18166 6.60553Z"
                  fill="#FE5656"
                />
              </svg>
            </div>

            <div className="px-[13px] py-[12px] items-center flex border rounded w-[33%]">
              <label htmlFor="opening">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  className="mr-[10px]"
                >
                  <path
                    d="M15.1808 19.5999H8.43084V0.399902H15.1808C15.8318 0.399902 16.4562 0.737044 16.9165 1.33716C17.3768 1.93728 17.6354 2.75121 17.6354 3.5999V16.3999C17.6354 17.2486 17.3768 18.0625 16.9165 18.6626C16.4562 19.2628 15.8318 19.5999 15.1808 19.5999ZM1.10455 0.399902H7.20357V19.5999H0.453569C-0.197417 19.5999 -0.82174 19.2628 -1.28206 18.6626C-1.74237 18.0625 -2.00098 17.2486 -2.00098 16.3999V3.5999C-2.00098 2.75121 -1.74237 1.93728 -1.28206 1.33716C-0.82174 0.737044 0.453569 0.399902 1.10455 0.399902ZM10.8854 3.5999C10.7226 3.5999 10.5666 3.68419 10.4515 3.83422C10.3364 3.98425 10.2718 4.18773 10.2718 4.3999C10.2718 4.61208 10.3364 4.81556 10.4515 4.96559C10.5666 5.11562 10.7226 5.1999 10.8854 5.1999H15.1808C15.3436 5.1999 15.4997 5.11562 15.6147 4.96559C15.7298 4.81556 15.7945 4.61208 15.7945 4.3999C15.7945 4.18773 15.7298 3.98425 15.6147 3.83422C15.4997 3.68419 15.3436 3.5999 15.1808 3.5999H10.8854Z"
                    fill="#FE5656"
                  />
                </svg>
              </label>
              <input
                type="text"
                name="opening"
                id="opening"
                placeholder="Đang mở"
                className="w-[100px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M6.18166 6.60553C5.91803 6.60553 5.65427 6.51338 5.45336 6.32907L0.301847 1.61084C-0.100616 1.24222 -0.100616 0.645072 0.301847 0.276459C0.704309 -0.0921531 1.3563 -0.0921531 1.75876 0.276459L6.18166 4.32898L10.6055 0.277196C11.008 -0.091416 11.66 -0.091416 12.0624 0.277196C12.4649 0.645809 12.4649 1.24296 12.0624 1.61157L6.91092 6.32981C6.70969 6.51412 6.44567 6.60553 6.18166 6.60553Z"
                  fill="#FE5656"
                />
              </svg>
            </div>
          </div>

          <div className="">
            <button className="text-white font-bold text-center text-base bg-[#FE5656] px-[30px] py-[12px] rounded ">
              Tìm kiếm
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-[#ECF8EE]">
              <tr>
                <th
                  scope="col"
                  className="py-[10px] px-[20px] border text-center text-base not-italic font-semibold"
                >
                  STT
                </th>
                <th
                  scope="col"
                  className="py-[10px] px-[20px] border text-center text-base not-italic font-semibold"
                >
                  Tên tin đăng
                </th>
                <th
                  scope="col"
                  className="py-[10px] px-[10px] flex justify-between text-center text-base not-italic font-semibold"
                >
                  Hạn nộp{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <g clip-path="url(#clip0_491_4711)">
                      <path
                        d="M7.99979 13.5C7.65863 13.5 7.31729 13.3901 7.05729 13.1704L0.390625 7.54541C-0.130208 7.10596 -0.130208 6.39404 0.390625 5.95459C0.911458 5.51514 1.75521 5.51514 2.27604 5.95459L7.99979 10.7859L13.7248 5.95547C14.2456 5.51602 15.0894 5.51602 15.6102 5.95547C16.131 6.39492 16.131 7.10684 15.6102 7.54629L8.94354 13.1713C8.68312 13.391 8.34146 13.5 7.99979 13.5Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_491_4711">
                        <rect width="16" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </th>
                <th
                  scope="col"
                  className="py-[10px] px-[10px] border text-center text-base not-italic font-semibold overflow-x-visible"
                >
                  Ứng viên/Lượt xem
                </th>
                <th
                  scope="col"
                  className="py-[10px] px-[10px] border text-center text-base not-italic font-semibold"
                >
                  Người phụ trách
                </th>
                <th
                  scope="col"
                  className="py-[10px] px-[10px] border text-center text-base not-italic font-semibold"
                >
                  Trạng thái
                </th>
                <th
                  scope="col"
                  className="py-[10px] px-[10px] border text-center text-base not-italic font-semibold"
                >
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  className="py-[15px] px-[18px] border text-center"
                >
                  1
                </td>
                <td className="py-[15px] px-[18px] border">
                  <div>
                    <p className="text-red-500 text-xl not-italic font-semibold overflow-x-auto">
                      Thực tập sinh Business Analyst
                    </p>
                    <p className="text-red-500 text-xl not-italic font-semibold overflow-x-auto">
                      chuyên ngành Banking
                    </p>
                    <p className="text-base not-italic font-normal text-[#333333]">
                      Tạo lúc: 11:20 - 01/03/2023
                    </p>
                    <p className="text-base not-italic font-normal text-[#333333]">
                      Cập nhật lúc: 09:30 - 04/03/2023
                    </p>
                    <p className="text-base not-italic font-normal text-[#333333]">
                      Địa điểm làm việc: TP. Hồ Chí Minh
                    </p>
                    <p className="text-[#C97410] text-base not-italic font-normal cursor-pointer">
                      [Xem danh sách ứng viên đã ứng tuyển]
                    </p>
                  </div>
                </td>
                <td className="py-[15px] px-[18px] border text-center">
                  01/05/2023
                </td>
                <td className="py-[15px] px-[18px] border text-center">
                  <div>
                    <span className="inline-block bg-[#FCB25F] rounded-[5px] w-[60px] py-[9px] text-center">
                      15
                    </span>
                    <span> / </span>
                    <span className="inline-block bg-[#54ADFF] rounded-[5px] w-[60px] py-[9px] text-center">
                      125
                    </span>
                  </div>
                </td>
                <td className="py-[15px] px-[18px] border text-center">
                  Người 1
                </td>
                <td className="py-[15px] px-[18px] border text-center">
                  <div
                    className={`w-[90px] py-[9px] text-center ${
                      isOpen ? "bg-[#88D4987A]" : "bg-[#FF00005C]"
                    } rounded-[5px]`}
                  >
                    {isOpen ? "Đang mở" : "Đã đóng"}
                  </div>
                </td>
                <td className="py-[15px] px-[18px] border text-center">
                  <div className="flex-col ">
                    <div className="flex mb-[10px] cursor-pointer">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        className=" mr-[10px]"
                      >
                        <path
                          d="M18.363 6.76712L13.7055 2.16438L15.2397 0.630137C15.6598 0.210046 16.176 0 16.7882 0C17.3997 0 17.9155 0.210046 18.3356 0.630137L19.8699 2.16438C20.29 2.58447 20.5091 3.09151 20.5274 3.68548C20.5457 4.27872 20.3448 4.78539 19.9247 5.20548L18.363 6.76712ZM16.774 8.38356L5.15753 20H0.5V15.3425L12.1164 3.72603L16.774 8.38356Z"
                          fill="#FE5656"
                        />
                      </svg>
                      <span className="text-black text-base not-italic font-normal ">
                        Chỉnh sửa
                      </span>
                    </div>
                    <div
                      className="flex mb-[10px] cursor-pointer"
                      onClick={toggleState}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        className="cursor-pointer mr-[10px]"
                      >
                        <path
                          d="M10.4 11.5L12.5 9.4L14.6 11.5L16 10.1L13.9 8L16 5.9L14.6 4.5L12.5 6.6L10.4 4.5L9 5.9L11.1 8L9 10.1L10.4 11.5ZM6.5 16C5.95 16 5.47933 15.8043 5.088 15.413C4.696 15.021 4.5 14.55 4.5 14V2C4.5 1.45 4.696 0.979 5.088 0.587C5.47933 0.195667 5.95 0 6.5 0H18.5C19.05 0 19.521 0.195667 19.913 0.587C20.3043 0.979 20.5 1.45 20.5 2V14C20.5 14.55 20.3043 15.021 19.913 15.413C19.521 15.8043 19.05 16 18.5 16H6.5ZM2.5 20C1.95 20 1.47933 19.8043 1.088 19.413C0.696 19.021 0.5 18.55 0.5 18V4H2.5V18H16.5V20H2.5Z"
                          fill="#FE5656"
                        />
                      </svg>
                      <span className="text-black text-base not-italic font-normal ">
                        Đóng tin
                      </span>
                    </div>
                    <div className="flex mb-[5px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                        className="cursor-pointer"
                      >
                        <path
                          d="M3 23C2.45 23 1.97933 22.8132 1.588 22.4397C1.196 22.0655 1 21.6159 1 21.0909V7.72727H3V21.0909H14V23H3ZM7 19.1818C6.45 19.1818 5.97933 18.995 5.588 18.6215C5.196 18.2473 5 17.7977 5 17.2727V3.90909C5 3.38409 5.196 2.9345 5.588 2.56032C5.97933 2.18677 6.45 2 7 2H14L20 7.72727V17.2727C20 17.7977 19.8043 18.2473 19.413 18.6215C19.021 18.995 18.55 19.1818 18 19.1818H7ZM13 8.68182H18L13 3.90909V8.68182Z"
                          fill="#FE5656"
                        />
                      </svg>
                      <span className="text-black text-base not-italic font-normal ">
                        Nhân bản
                      </span>
                    </div>
                    <div className="flex mb-[10px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        className="cursor-pointer mr-[10px]"
                      >
                        <path
                          d="M0.5 2.27L1.78 1L3.5 2.72L3.78 3L4.78 4L16.5 15.72L18.5 17.72L17.23 19L15.77 17.54C15.43 17.83 15 18 14.5 18H6.5C5.4 18 4.5 17.1 4.5 16V6.27L0.5 2.27ZM17.5 1V3H6.32L4.32 1H7L8 0H13L14 1H17.5ZM16.5 4V13.18L7.32 4H16.5Z"
                          fill="#FE5656"
                        />
                      </svg>
                      <span className="text-black text-base not-italic font-normal ">
                        Xóa tin
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default RecruitmentList;
