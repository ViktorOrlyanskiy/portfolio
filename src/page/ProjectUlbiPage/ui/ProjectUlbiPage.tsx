import { FC } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./ProjectUlbiPage.module.scss";

const ProjectUlbiPage: FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={cls.wrapper}></div>
        </div>
    );
};
export default ProjectUlbiPage;
