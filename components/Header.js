import { useState, useEffect } from 'react';
const Header = (props) => {
  const {toggleSidebarHandler} = props
  console.log(toggleSidebarHandler)
  console.log(props)
  const toggleSideBar = e => {
    e.preventDefault()
    e.stopPropagation()
    toggleSidebarHandler()
  };
  
  return (
    <div className="az-header">
      <div className="container-fluid">
        <div className="az-header-left">
          <a
            href="javascript:void(0);"
            id="azSidebarToggle"
            onClick={toggleSideBar}
            className="az-header-menu-icon"
          >
            <span />
          </a>
        </div>
        <div className="az-header-center">
          <input
            type="search"
            className="form-control"
            placeholder="Search for anything..."
          />
          <button className="btn">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="az-header-right">
          <div className="az-header-message">
            <a href="app-chat.html">
              <i className="typcn typcn-messages" />
            </a>
          </div>
          <div className="dropdown az-header-notification">
            <a href="" className="new">
              <i className="typcn typcn-bell" />
            </a>
          </div>
          <div className="dropdown az-profile-menu">
            <a href="" className="az-img-user">
              <img src="https://via.placeholder.com/500" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
