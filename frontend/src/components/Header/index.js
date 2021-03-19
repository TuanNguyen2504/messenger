import { Badge } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LoveIcon from '@material-ui/icons/Favorite';
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Textsms';
import LockIcon from '@material-ui/icons/VpnLock';
import logoUrl from 'assets/imgs/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';

// fake data
const avtUrl =
  'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-1/cp0/c0.7.50.50a/p50x50/113736806_2750904441808448_2237668902459956508_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=LUCyGgZScEQAX8A8LM4&_nc_ht=scontent.fsgn2-5.fna&tp=27&oh=f24e0d4a1f3dd3c10bef32243dfd4df7&oe=60793377';

function Header() {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [isShowSmSearch, setIsShowSmSearch] = useState(false);

  const classes = useStyle();
  return (
    <div className="w-100vw">
      <div
        className={`${classes.root} p-tb-8 d-flex align-i-center justify-content-between container-fluid`}>
        {/* search bar */}
        <div className={`${classes.searchBar} d-flex align-i-center`}>
          {/* logo */}
          {isSearchFocus ? (
            <ArrowBackIcon
              onClick={() => {
                setIsSearchFocus(false);
              }}
              className={`${classes.arrowIcon} m-r-8`}
            />
          ) : (
            <Link to="/">
              <img className={`${classes.logo} m-r-8`} src={logoUrl} />
            </Link>
          )}

          {/* search */}
          <div
            className={`${classes.search} d-flex align-i-center flex-grow-1 p-lr-16`}
            onClick={() => setIsSearchFocus(true)}>
            {!isSearchFocus && (
              <SearchIcon className={`${classes.searchIcon} m-r-4`} />
            )}

            <InputBase
              className={`${classes.searchInput} w-100`}
              placeholder="Tìm kiếm"
            />
          </div>

          {/* search small device */}
          <div className="pos-rel">
            <div
              onClick={() => setIsShowSmSearch(true)}
              className={`${classes.wrapSearchIcon} pos-rel m-l-8`}>
              <SearchIcon className={`${classes.searchIcon} trans-center`} />
            </div>
            {isShowSmSearch && (
              <div className={`${classes.searchSm} pos-abs d-flex`}>
                <ArrowBackIcon
                  onClick={() => setIsShowSmSearch(false)}
                  className={`${classes.arrowIcon} cus-pointer`}
                />
                <InputBase
                  className={`${classes.searchInput} w-100`}
                  placeholder="Tìm kiếm"
                />
              </div>
            )}
          </div>
        </div>

        {/* navigation */}
        <ul
          className={`${classes.nav} flex-grow-1 d-flex justify-content-center align-i-center`}>
          <li className="active">
            <Badge badgeContent={4} max={9}>
              <ChatIcon className="nav-item" />
            </Badge>
          </li>
          <li>
            <Badge badgeContent={0} max={9}>
              <PersonIcon className="nav-item" />
            </Badge>
          </li>
          <li>
            <Badge badgeContent={10} max={9}>
              <GroupIcon className="nav-item" />
            </Badge>
          </li>
          <li>
            <LockIcon className="nav-item" />
          </li>
          <li>
            <LoveIcon className="nav-item" />
          </li>
        </ul>

        {/* user information, control setting */}
        <div
          className={`${classes.information} d-flex align-i-center justify-content-end`}>
          {/* user */}
          <div className={`${classes.user} d-flex align-i-center`}>
            <img src={avtUrl} className="m-r-8" />
            <h3>Tuấn</h3>
          </div>

          {/* icon */}
          <ul className={`${classes.control} d-flex`}>
            <li>
              <AddIcon className="icon" />
            </li>
            <Badge max={9} badgeContent={1} overlap="circle">
              <li>
                <NotificationsIcon className="icon" />
              </li>
            </Badge>
            <li>
              <ArrowDropDownIcon className="icon" />
            </li>
            <li className="menu-bar">
              <MenuIcon className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
