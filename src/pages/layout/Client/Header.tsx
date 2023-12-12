import { BsFillBagCheckFill, BsHeart } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { useGetInformationsQuery } from "../../../api/information";
import { IInformation } from "../../../interfaces/information";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import UserInformation from "../Users/UserInformation/user";

const Header = () => {
  const listMenu = [
    { name: "Trang Chủ", path: "/" },
    { name: "Sản Phẩm", path: "/list-productsAll" },
    { name: "Tin Tức", path: "/blog" },
    { name: "Thông Tin", path: "/about" },
    { name: "Liên Hệ", path: "/contact" },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const inputRef = useRef(null as any);
  const { data: informationData } = useGetInformationsQuery();

  const hanldClear = () => {
    setValueSearch("");
    inputRef.current.focus();
  };

  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    if (valueSearch.length > 0) {
      navigate(`/result?search=${valueSearch}`);
      inputRef.current.blur();
      setOpen(false);
    }
  };

  return (
    <>
      <div className=" fixed z-40  pt-1 ">
        <header className="min-h-[100px] bg-white w-screen ">
          <div className="content-header py-2 flex md:flex-row items-center mx-10">
            <div className="w-20 h-20 ">
              <Link to={"/"}>
                {informationData?.data?.map((information: IInformation) => (
                  <img alt="" src={information.logo} className="rounded-full" />
                ))}
              </Link>
            </div>
            <div className="navbar-menu-header hidden md:block ">
              <ul className="flex items-center justify-center">
                {listMenu.map((item, index) => (
                  <li className="mx-2" key={index}>
                    <Link
                      className={`px-2 py-1 text-lg  font-medium hover:text-teal-500 ${
                        activeLink === item.path
                          ? "text-teal-500 transition-opacity"
                          : ""
                      }`}
                      to={item.path}
                      onClick={() => setActiveLink(item.path)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-80 ">
              <form
                onSubmit={onSubmitSearch}
                className={`search-header relative ml-auto  w-50 focus-within:w-80 border  h-10  group  flex items-center justify-around pl-2 rounded-3xl ${
                  valueSearch.length > 0 ? "w-80" : ""
                }`}
              >
                <input
                  className="inp-search w-5/6 text-sm  caret-teal-400  h-6 outline-none    pl-2 pr-7"
                  type="text"
                  name=""
                  id=""
                  placeholder="Tìm kiếm ..."
                  ref={inputRef}
                  value={valueSearch}
                  onChange={(e) => setValueSearch(e.target.value)}
                  onFocus={() => setOpen(true)}
                />{" "}
                {
                  <span
                    onClick={hanldClear}
                    className="absolute clears cursor-pointer  right-[50px] top-1/2 translate-y-[-50%]"
                  >
                    <TiDelete className="text-xl text-black" />
                  </span>
                }
                <button className="mx-1">
                  <SearchOutlined />
                </button>
              </form>
            </div>
            <div className="action-cart-heart md:flex items-center gap-10 hidden ">
              <div className="heart-header mx-5">
                <Link title="Cart" className="" to={"/cart"}>
                  <i className="relative">
                    <BsFillBagCheckFill className="heart-icon text-black text-3xl" />
                    <div className="quatity-producst  -top-2 ml-6 absolute">
                      <span className="bg-red-500 text-white rounded-full text-xs px-1 py-[2px]">
                        99+
                      </span>
                    </div>
                  </i>
                </Link>
              </div>
              <div className="heart-header">
                <Link title="Cart" className="" to={"/cart"}>
                  <i className="relative">
                    <BsHeart className="heart-icon text-black text-3xl" />
                    <div className="quatity-producst  -top-2 ml-6 absolute">
                      <span className="bg-red-500 text-white rounded-full text-xs px-1 py-[2px]">
                        99+
                      </span>
                    </div>
                  </i>
                </Link>
              </div>
              <div>
                <UserInformation/>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
