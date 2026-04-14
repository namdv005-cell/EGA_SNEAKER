import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Header = () => {
  const [menu, setMenuData] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:5000/menu')
      .then((Response) => {
        const menuCategories = Response.data.menuCategories;
        const customerMenu = Response.data.customerMenu;
        const trademark = Response.data.trademark;
        const usageNeeds = Response.data.usageNeeds;
        const categoryproducts = Response.data.categoryproducts;
        setMenuData({
          menuCategories,
          customerMenu,
          trademark,
          usageNeeds,
          categoryproducts,
        })
      })
      .catch((error) => console.error("Error fetching menu data:", error))
  })
  return (
    <>
      <div className="container">
        <div className="header d-flex align-items-center">
          <div className="logo">
            <a href className="link-logo">
              <img src="https://res.cloudinary.com/dnb1p68h9/image/upload/v1774542743/1_vsglkf.png" alt className="img-logo" />
            </a>
          </div>
          <div className="navigation--horizontal">
            <ul className="navigation-horizontal">
              <li className="menu-item"><a href className="menu-item__link">Trang chủ</a></li>
              <li className="menu-item has-submenu"><a href className="menu-item__link">Sản phẩm <i className="ti-angle-down" /></a>
                <div className="submenu">
                  <div className>
                    <ul className="submenu__list">
                      <li className="submenu__col">
                        <span className="submenu__item--main">Đối tượng</span>
                        <ul>
                          <li className="submenu__item"><a href>Sneaker Nam</a></li>
                          <li className="submenu__item"><a href>Sneaker Nữ</a></li>
                          <li className="submenu__item"><a href>Sneaker Unisex</a></li>
                          <li className="submenu__item"><a href>Sneaker Trẻ Em</a></li>
                          <li className="submenu__item"><a href>Sneaker Couple</a></li>
                        </ul>
                      </li>
                      <li className="submenu__col">
                        <span className="submenu__item--main">Thương hiệu</span>
                        <ul>
                          <li className="submenu__item"><a href>Nike</a></li>
                          <li className="submenu__item"><a href>ADIDAS</a></li>
                          <li className="submenu__item"><a href>PUMA</a></li>
                          <li className="submenu__item"><a href>CROCS</a></li>
                          <li className="submenu__item"><a href>FITFLOP</a></li>
                        </ul>
                      </li>
                      <li className="submenu__col">
                        <span className="submenu__item--main"> Nhu Cầu Sử Dụng </span>
                        <ul>
                          <li className="submenu__item"><a href>Sneaker đi học – đi làm</a>
                          </li>
                          <li className="submenu__item"><a href>Sneaker chạy bộ</a></li>
                          <li className="submenu__item"><a href>Sneaker tập gym</a></li>
                          <li className="submenu__item"><a href>Sneaker chơi thể thao</a></li>
                          <li className="submenu__item"><a href>Sneaker đi chơi – dạo phố</a>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu__col">
                        <span className="submenu__item--main"> Phong Cách </span>
                        <ul>
                          <li className="submenu__item"><a href>Sneaker cổ thấp (Low-top)</a>
                          </li>
                          <li className="submenu__item"><a href>Sneaker cổ cao (High-top)</a>
                          </li>
                          <li className="submenu__item"><a href>Sneaker cổ trung (Mid-top)</a>
                          </li>
                          <li className="submenu__item"><a href>Sneaker đế dày (Chunky)</a>
                          </li>
                          <li className="submenu__item"><a href>Sneaker Retro / Vintage</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item has-submenu"><a href className="menu-item__link">Khuyến mại <i className="ti-angle-down" /></a>
                <ul className="submenu submenu-promotion">
                  <li className="submenu_item">
                    <a href className="submenu__link">Deal giá sốc</a>
                  </li>
                  <li className="submenu_item">
                    <a href className="submenu__link">Sale cuối năm</a>
                  </li>
                  <li className="submenu_item">
                    <a href className="submenu__link">Combo Sneaker – Phụ kiện</a>
                  </li>
                  <li className="submenu_item">
                    <a href className="submenu__link">Sneaker đồng giá</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item"><a href className="menu-item__link">Blog</a></li>
              <li className="menu-item"><a href className="menu-item__link">Về chúng tôi</a></li>
            </ul>
          </div>
          <div className="header-icon-wrapper">
            <div className="search-logo">
              <i className="ti-search ti-style" />
            </div>
            <div className="user-logo">
              <i className="ti-user ti-style" />
            </div>
            <div className="shop-logo">
              <i className="ti-bag ti-style" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
