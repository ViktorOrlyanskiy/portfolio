import { FC } from "react";
import { content } from "../model/content";
import cls from "./ProjectUlbiPage.module.scss";

const ProjectUlbiPage: FC = () => {
    return (
        <div>
            <div className={cls.wrapper}>
                <h2>Кратное содеражние курса</h2>
                <div className={cls.list}>
                    {content.map(({ title, text }) => (
                        <div key={title} className={cls.item}>
                            <div className={cls.title}>{title}</div>
                            <div className={cls.img}></div>
                            <div className={cls.text}>{text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ProjectUlbiPage;
