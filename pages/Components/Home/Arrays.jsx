import React from "react";
import { FormattedMessage } from "react-intl";
const Arrays = () => {
  return (
    <>
      <div className="section-full mobile-page-padding latest-blog-wrap p-t80 p-b30 square_shape1">
        {/* style="background-image:url(https://theme7x.com/shapen/images/background/bg5.jpg)" */}
        <div className="container">
          {/* TITLE START */}
          <div className="section-head ">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">
                  <span className="font-weight-300 site-text-primary">
                    <FormattedMessage
                      id="title1.ingredient"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </span>{" "}
                  <FormattedMessage
                    id="title1.1.ingredient"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          {/* IMAGE CAROUSEL START */}
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                  <div className="mt-post-media mt-img-overlay7">
                    <a href="javascript:;">
                      <img
                        src="https://theme7x.com/shapen/images/blog/latest-blog/pic1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mt-post-info p-a30">
                    <div className="post-overlay-position">
                      <div className="mt-post-meta ">
                        <ul>
                          <li className="post-date">
                            <strong className="site-text-primary">21</strong>
                            <span>08/2023</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-post-title ">
                        <h4 className="post-title m-b0">
                          <FormattedMessage
                            id="content1.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </h4>
                      </div>
                      <div className="mt-post-text">
                        <p>
                          <FormattedMessage
                            id="text1.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </p>
                      </div>
                      <div className="readmore-line">
                        <span>
                          <a
                            href="blog-grid.html"
                            className="site-button-link"
                            data-hover="Xem Chi tiết"
                          >
                            <FormattedMessage
                              id="see.ingredient"
                              values={{ b: (chunks) => <b>{chunks}</b> }}
                            />{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                  <div className="mt-post-media mt-img-overlay7">
                    <a href="javascript:;">
                      <img
                        src="https://theme7x.com/shapen/images/blog/latest-blog/pic2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mt-post-info p-a30">
                    <div className="post-overlay-position">
                      <div className="mt-post-meta ">
                        <ul>
                          <li className="post-date">
                            <strong className="site-text-primary">18</strong>
                            <span>08/2023</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-post-title ">
                        <h4 className="post-title m-b0">
                          <FormattedMessage
                            id="content2.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </h4>
                      </div>
                      <div className="mt-post-text">
                        <p>
                          <FormattedMessage
                            id="text2.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </p>
                      </div>
                      <div className="readmore-line">
                        <span>
                          <a
                            href="blog-grid.html"
                            className="site-button-link"
                            data-hover="Xem Chi tiết"
                          >
                            <FormattedMessage
                              id="see.ingredient"
                              values={{ b: (chunks) => <b>{chunks}</b> }}
                            />{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                  <div className="mt-post-media mt-img-overlay7">
                    <a href="javascript:;">
                      <img
                        src="https://theme7x.com/shapen/images/blog/latest-blog/pic3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mt-post-info p-a30">
                    <div className="post-overlay-position">
                      <div className="mt-post-meta ">
                        <ul>
                          <li className="post-date">
                            <strong className="site-text-primary">14</strong>
                            <span>08/2023</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-post-title ">
                        <h4 className="post-title m-b0">
                          <FormattedMessage
                            id="content3.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </h4>
                      </div>
                      <div className="mt-post-text">
                        <p>
                          <FormattedMessage
                            id="text3.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                        </p>
                      </div>
                      <div className="readmore-line">
                        <span>
                          <a
                            href="blog-grid.html"
                            className="site-button-link"
                            data-hover="Xem Chi tiết"
                          >
                            <FormattedMessage
                              id="see.ingredient"
                              values={{ b: (chunks) => <b>{chunks}</b> }}
                            />{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
          <strong>Blog</strong>
        </div>
      </div>
    </>
  );
};
export default Arrays;
