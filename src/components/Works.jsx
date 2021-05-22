import React from "react";

const Works = () => {
  return (
    <section className="works section" id="works">
      <div className="inner">
        <h2 className="title">WORKS</h2>
        <div className="works-list">
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="/images/works-sample-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Design / Coding(Responsive)</p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="/images/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">
              Design / Coding(Responsive) / WordPress
            </p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="/images/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Design</p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="/images/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Banner Design</p>
          </a>
          <a className="works-item" href="works-template.html">
            <p className="works-img">
              <img src="/images/works-dummy-thumb.jpg" alt="" />
            </p>
            <p className="works-name">作品名が入る</p>
            <p className="works-info">Banner Design</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
