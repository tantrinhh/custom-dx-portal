import React from "react";

export const Story = () => {
  return (
    <>
      <div
        className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
        style={{
          backgroundImage:
            "url(https://theme7x.com/shapen/images/left-men.png), url(https://theme7x.com/shapen/images/background/bg-4.png)",
        }}
      >
        <div className="section-content">
          <div className="container">
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 site-text-primary">
                      Câu chuyện{" "}
                    </span>{" "}
                    chuyển đổi số
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
                  style={{
                    backgroundImage:
                      "url(https://theme7x.com/shapen/images/background/bg-site.png)",
                  }}
                >
                  <h3 className="m-t0">
                    <span className="font-weight-100"> Câu chuyện</span>
                    <br /> chuyển đổi số
                  </h3>
                  <p>
                    “Internet là một mạng lưới phi tập trung với sự sáng tạo
                    không giới hạn. Và chuyển đổi số chính là bước tiếp theo của
                    cuộc cách mạng về phi tập trung hóa”
                  </p>
                  <ul className="list-angle-right anchor-line">
                    <li>
                      <a href="services.html">
                        Đô thị thông minh và Chính quyền số
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        Cơ sở dữ liệu quốc gia về dân cư
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        Hệ thống Hội nghị giao ban điện tử
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        Khoa học, công nghệ đổi mới sáng tạo
                      </a>
                    </li>
                    <li>
                      <a href="services.html">Cấp hộ chiếu phổ thông</a>
                    </li>
                  </ul>
                  <div className="text-right">
                    <a
                      href="about-1.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="mission-mid bg-no-repeat bg-cover m-b30"
                  style={{
                    backgroundImage:
                      "url(https://theme7x.com/shapen/images/mission.jpg)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
