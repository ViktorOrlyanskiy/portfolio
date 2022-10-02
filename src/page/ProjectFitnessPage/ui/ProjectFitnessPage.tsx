import { FC } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./ProjectFitnessPage.module.scss";

const ProjectFitnessPage: FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={cls.wrapper}></div>
        </div>
    );
};
export default ProjectFitnessPage;
