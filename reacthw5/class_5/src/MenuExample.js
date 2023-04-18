import React, { useState } from "react";

import styled from "styled-components";

import classnames from "classnames";

// import "./MenuScss.scss";
// import "./MenuCss.css";

const menuList = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Home 2",
  },
  {
    id: 3,
    title: "Home 3",
  },
  {
    id: 4,
    title: "Home 4",
  },
];

const MenuExample = () => {
  const [activeItem, setActiveItem] = useState(menuList[0]);

  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  const Menu = styled.nav`
    width: 184px;
    background: #deebfb;
  `;

  const MenuList = styled.ul``;

  const MenuItem = styled.li`
    background: ${(props) => (props.active ? "#FF5454" : "transparent")};
    display: flex;
    align-items: center;
    border-radius: 15px;

    &:not(:last-child) {
      margin-bottom: 45px;
    }

    ${(props) =>
      props.active &&
      `
      ${MenuTitle}{
        color: #fff;
      }

      ${MenuIcon}{
        background: #DF4545;

        &:before {
          background: #fff;
        }
      }
    `}
  `;
  const MenuIcon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 44px;
    background: #ffffff;
    border-radius: 15px;
    margin-right: 45px;

    &:before {
      content: "";
      display: inline-block;
      height: 15px;
      width: 15px;
      background: black;
    }
  `;

  const MenuTitle = styled.span`
    color: #909090;
    font-weight: 500;
    font-size: 14px;
  `;

  return (
    // <nav className="menu">
    //   <ul className="menu__list">
    //     {menuList.map((item) => (
    //       <li
    //         className={classnames("menu__item", {
    //           "menu__item--active": activeItem.id === item.id,
    //         })}
    //         key={item.id}
    //         onClick={() => changeActiveItem(item)}
    //       >
    //         <div className="menu__icon"></div>
    //         <span className="menu__title">{item.title}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <Menu>
      <MenuList>
        {menuList.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => changeActiveItem(item)}
            active={item.id === activeItem.id}
          >
            <MenuIcon />
            <MenuTitle>{item.title}</MenuTitle>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuExample;
