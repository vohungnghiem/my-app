import React, { Component } from 'react'
import './custom.css';
import { NavLink } from 'react-router-dom';
import CustomLink from './CustomLink';
import { menus } from './DataLink';
class MainMenu extends Component {
    
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index)=>{
            return (
                <CustomLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeExact={menu.exact}
                />)
            });
        }
        return result;
    }
  render() {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <NavLink to="/admin" exact className="navbar-brand">Dashboard</NavLink>
            <button className="navbar-toggler hidden-lg-up" type="button" 
                data-toggle="collapse" data-target="#collapsibleNavId" 
                >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.showMenus(menus)}
                </ul>
                <div>
                    <ul className="navbar-nav">
                    <li className="nav-item"> 
                    <a href="/admin/login" className="nav-link">logout</a>
                </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default MainMenu;