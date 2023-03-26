import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://hc.com.vn/i/ecommerce/media/ckeditor_3703954.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Laptop
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Iphone
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/800px-Andromeda_Galaxy_560mm_FL.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Galaxy
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Duck
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Duck
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Duck
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
