import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RoutePath } from "shared/const";
import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
    const activeStyle = {
        borderBottom: "1px solid #fff",
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <NavLink to={RoutePath.main} style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
                    главная
                </NavLink>
                <NavLink to={RoutePath.project} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    проекты
                </NavLink>
                <NavLink to={RoutePath.contacts} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    контакты
                </NavLink>
            </div>
        </div>
    );
};
