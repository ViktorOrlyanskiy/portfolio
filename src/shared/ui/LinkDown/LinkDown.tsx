import { FC, ReactNode } from "react";
import { Link } from "react-scroll";
import { ArrowDown } from "shared/assets";
import { classNames } from "shared/lib";
import cls from "./LinkDown.module.scss";

interface LinkDownProps {
    className?: string;
    to: string;
    children?: ReactNode;
    up?: boolean;
}
export const LinkDown: FC<LinkDownProps> = (props) => {
    const { className = "", to, up = false, children } = props;

    return (
        <div
            className={classNames(cls.LinkDown, { [cls.linkUp]: up }, [
                className,
            ])}
        >
            <div></div>
            <div>{children}</div>
            <Link to={to} smooth={true} duration={500}>
                <ArrowDown />
            </Link>
        </div>
    );
};
