import React from "react";
import { FormattedMessage } from "react-intl";
const Problem = () => {
  return (
    <>
      <div
        className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2"
        style={{
          backgroundImage:
            "url(https://theme7x.com/shapen/images/background/bg5.jpg)",
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-left">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one ">
                  <span className="font-weight-300 site-text-primary">
                    <FormattedMessage
                      id="title1.problem"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </span>{" "}
                  <FormattedMessage
                    id="title1.1.problem"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
              {/* COLUMNS 1 */}
              <div className="stamp masonry-item col-lg-3 col-md-6 m-b30">
                <div className="bg-gray p-a30">
                  <div className="filter-wrap">
                    <ul className="filter-navigation masonry-filter text-uppercase">
                      <li className="active">
                        <a data-filter="*" data-hover="All" href="#">
                          <FormattedMessage
                            id="title2.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-1"
                          data-hover="Lĩnh vực theo chiều ngang"
                          href="javascript:;"
                        >
                          <FormattedMessage
                            id="link1.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-4"
                          data-hover="Lĩnh vực ưu tiên CĐS QG"
                          href="javascript:;"
                        >
                          <FormattedMessage
                            id="link2.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-2"
                          data-hover="Trụ cột của CĐS QG
"
                          href="javascript:;"
                        >
                          <FormattedMessage
                            id="link3.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-3"
                          data-hover="Đối tượng sử dụng"
                          href="javascript:;"
                        >
                          <FormattedMessage
                            id="link4.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-5"
                          data-hover="Theo cấp hành chính
"
                          href="javascript:;"
                        >
                          <FormattedMessage
                            id="link5.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* COLUMNS 2 */}
              <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text1.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 3 */}
              <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text2.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 4 */}
              <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text3.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />{" "}
                      &amp;{" "}
                      <FormattedMessage
                        id="text3.1.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 5 */}
              <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text4.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 6 */}
              <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text5.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 7 */}
              <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text6.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 8 */}
              <div className="masonry-item  cat-1 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/portrait/pic7.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text7.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 11 */}
              <div className="masonry-item  cat-6 col-lg-6 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/pic-l-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text8.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 9 */}
              <div className="masonry-item  cat-5 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/pic-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text9.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
              {/* COLUMNS 10 */}
              <div className="masonry-item  cat-4 col-lg-3 col-md-6 m-b30">
                <div className="mt-box   image-hover-block">
                  <div className="mt-thum-bx">
                    <img
                      src="https://theme7x.com/shapen/images/projects/pic-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-info  p-t20 text-white">
                    <h4 className="mt-tilte m-b10 m-t0">
                      <FormattedMessage
                        id="text10.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </h4>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Problem;
