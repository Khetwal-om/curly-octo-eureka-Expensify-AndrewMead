import React from 'react';
import { NavLink } from 'react-router-dom';






const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/create" exact activeClassName="is-active">Create</NavLink>
        {/* <NavLink to="/edit" exact activeClassName="is-active">Edit</NavLink> */}
        <NavLink to="/help" exact activeClassName="is-active">Help</NavLink>
        <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
    </header>
)


export default Header
