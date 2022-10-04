import { FC, ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./TitleBlock.module.scss";

interface TitleBlockProps {
    title?: string;
    subtitles?: string[] | ReactNode[];
    className?: string;
    button?: ReactNode;
}

export const TitleBlock: FC<TitleBlockProps> = (props) => {
    const { title, subtitles, button, className = "" } = props;

    return (
        <div className={classNames(cls.TitleBlock, {}, [className])}>
            {title && <div className={cls.title}>{title}</div>}

            {subtitles?.length &&
                subtitles.map((subtitle) => (
                    <div className={cls.subtitle}>{subtitle}</div>
                ))}

            {button}
        </div>
    );
};
