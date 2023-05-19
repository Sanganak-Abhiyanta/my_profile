import React from "react";
import "./blogs.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

export default function Blogs() {
  return (
    <div className="blog container section" id="blog">
      <h2 className="section__title">Latest Blogs</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#" className="blog__category">
              Reviews
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Development Tool for Your Projects.
            </h3>
            <div className="blog__meta">
              <span>17 May 2023</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#" className="blog__category">
              Tutorial
            </a>
            <a href="#">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
             Common misconceptions about Payment
            </h3>
            <div className="blog__meta">
              <span>30 May 2022</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#" className="blog__category">
              Business
            </a>
            <a href="#">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to know about startup business
            </h3>
            <div className="blog__meta">
              <span>16 October 2022</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
