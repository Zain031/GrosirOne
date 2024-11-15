import { NavLink } from "react-router-dom";

import { HomeSVG } from "../../assets/svgs";

function SidebarMenu() {
    return (
        <>
            <li>
                <NavLink to="/">
                    <HomeSVG />
                    List of countries
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    <HomeSVG />
                    List of countries
                </NavLink>
            </li>{" "}
            <li>
                <NavLink to="/">
                    <HomeSVG />
                    List of countries
                </NavLink>
            </li>
        </>
    );
}

export default SidebarMenu;
