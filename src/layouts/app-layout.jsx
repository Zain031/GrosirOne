import { useEffect, useState } from "react";
import image from "../assets/grosirone_logo.png";
import { Outlet } from "react-router-dom";
import { CloseSVG } from "../assets/svgs";
import Navbar from "./partials/navbar";
import SidebarMenu from "./partials/sidebar-menu";

function AppLayout() {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem("isDark"))
    );
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        localStorage.setItem("isDark", JSON.stringify(isDark));
        document.documentElement.setAttribute(
            "data-theme",
            isDark ? "dark" : "light"
        );
    }, [isDark]);

    return (
        <div className={`drawer ${isMenuOpen ? "lg:drawer-open" : ""}`}>
            <input
                id="my-drawer-3"
                type="checkbox"
                checked={isMenuOpen}
                readOnly
                className="drawer-toggle"
            />
            <div className="drawer-content mx-auto flex w-full max-w-7xl flex-col">
                <Navbar
                    setIsMenuOpen={setIsMenuOpen}
                    theme={isDark}
                    toggleTheme={setIsDark}
                />
                <Outlet />
            </div>

            <div className="drawer-side ">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu menu-lg min-h-full w-80 space-y-4 bg-[#2b2fb4] p-4 text-neutral-content">
                    <div className="flex items-start justify-center rounded-lg">
                        <div className="my-5 ">
                            <img
                                src={image}
                                className="size-48 h-32 rounded-l-full rounded-b-full "
                                alt="logo"
                            />
                        </div>
                        <button
                            className="btn btn-circle btn-ghost btn-sm lg:hidden"
                            onClick={() => setIsMenuOpen((open) => !open)}
                        >
                            <CloseSVG />
                        </button>
                    </div>
                    <SidebarMenu />
                </ul>
            </div>
        </div>
    );
}

export default AppLayout;
