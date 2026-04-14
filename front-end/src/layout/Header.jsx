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
        const voucherItem = Response.data.voucherItem;
        setMenuData({
          menuCategories,
          customerMenu,
          trademark,
          usageNeeds,
          categoryproducts,
          voucherItem
        })
      })
      .catch((error) => console.error("Error fetching menu data:", error))
  }, [])
  return (
    <>
      {menu && (
        <div className="container">
          <div className="header d-flex align-items-center">
            <div className="logo">
              <a href className="link-logo">
                <img src="https://res.cloudinary.com/dnb1p68h9/image/upload/v1774542743/1_vsglkf.png" alt className="img-logo" />
              </a>
            </div>
            <div className="navigation--horizontal">
              <ul className="navigation-horizontal">
                {menu.menuCategories.map(item => (
                  <li className="menu-item"><a href className="menu-item__link">{item.name}</a></li>
                ))}
                <div className="submenu">
                  <div className>
                    <ul className="submenu__list">

                      <li className="submenu__col">
                        <span className="submenu__item--main">Đối tượng</span>
                        <ul>
                          {menu.customerMenu.map((item => (
                            <li className="submenu__item"><a href={item.link} >{item.name}</a></li>
                          )))}
                        </ul>
                      </li>
                      <li className="submenu__col">
                        <span className="submenu__item--main">Thương hiệu</span>
                        <ul>
                          {menu.trademark.map((item => (
                            <li className="submenu__item"><a href={item.link}>{item.name}</a></li>
                          )))}
                        </ul>
                      </li>
                      <li className="submenu__col">
                        <span className="submenu__item--main"> Nhu Cầu Sử Dụng </span>
                        <ul>
                          {menu.usageNeeds.map((item => (
                            <li className="submenu__item"><a href={item.link}>{item.name}</a></li>
                          )))}
                        </ul>
                      </li>
                      <li className="submenu__col">
                        <span className="submenu__item--main"> Phong Cách </span>
                        <ul>
                          {menu.categoryproducts.map((item => (
                            <li className="submenu__item"><a href={item.link}>{item.name}</a>
                            </li>
                          )))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <li className="menu-item has-submenu"><a href className="menu-item__link"><i className="ti-angle-down" /></a>
                  <ul className="submenu submenu-promotion">
                    {menu.voucherItem.map((item => (
                      <li className="submenu_item">
                      <a href={item.link} className="submenu__link">{item.name}</a>
                    </li>
                    )))}
                  </ul>
                </li>
                <li className="menu-item"><a href className="menu-item__link"> </a></li>
                <li className="menu-item"><a href className="menu-item__link"> </a></li>
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
      )}
    </>
  )
}

export default Header
