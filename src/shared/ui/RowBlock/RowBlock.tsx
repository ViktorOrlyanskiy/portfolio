import { FC, ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./RowBlock.module.scss";

interface RowBlockProps {
    className?: string;
    firstColumn: ReactNode;
    lastColumn: ReactNode;
}

export const RowBlock: FC<RowBlockProps> = (props) => {
    const { className = "", firstColumn, lastColumn } = props;
    return (
        <div className={classNames(cls.RowBlock, {}, [className])}>
            <div className={cls.column}>{firstColumn}</div>
            <div className={cls.column}>{lastColumn}</div>
        </div>
    );
};
