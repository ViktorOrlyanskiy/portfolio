import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ArrowLeftLong } from "shared/assets";
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
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const isProject = pathname.includes("project/");

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {isProject && (
                <button onClick={() => navigate(-1)} className={cls.linkBack}>
                    <ArrowLeftLong />
                    <span>назад</span>
                </button>
            )}
            <div className={cls.links}>
                <NavLink
                    to={RoutePath.main}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    end
                >
                    главная
                </NavLink>
                <NavLink
                    to={RoutePath.project}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    проекты
                </NavLink>
                <NavLink
                    to={RoutePath.contacts}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    контакты
                </NavLink>
            </div>
        </div>
    );
};
