import React from "react";
import "../App.css";
import { VscAccount } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
function Appbar() {
  return (
    <div class="nav-box">
      <div className="nav-con">
        <div>
          <Link to="/" class="nav-brand">
            Logo
          </Link>
        </div>
        <div className="nav-menu">
          <FiMenu className="menu" />
        </div>
        <div className="search">
          <form class="d-flex " role="search">
            <input
              class=" search-input "
              type="search"
              placeholder="Search "
              aria-label="Search"
            />
            <button class=" search-btn" type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="nav-ul-menu">
          <ul class="nav-ul">
            {/* <li class="nav-li">
              <Link to="/" class="nav-link ">
                Notification <IoNotificationsOutline className="li-ic" />
              </Link>
            </li> */}
            {/* <li class="nav-li">
              <Link to="/" class="nav-link ">
                Orders <MdOutlineFavoriteBorder className="li-ic" />
              </Link>
            </li> */}

            <li class="nav-li">
              <Link to="/" class="nav-link active" aria-current="page">
                <FiLogOut className="li-ic " /> Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
