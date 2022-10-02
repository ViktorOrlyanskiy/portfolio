import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/const";
import cls from "./ProjectPage.module.scss";
import fitness_app from "shared/assets/img/fitness-app.jpg";
import default_icon from "shared/assets/img/default-icon.png";

const ProjectPage: FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={cls.wrapper}>
                <div className={cls.row}>
                    <div
                        className={cls.column}
                        onClick={() => navigate(RoutePath.project_fitness)}
                    >
                        <h2>Fitness App</h2>
                        <div
                            className={cls.img}
                            style={{
                                background: `url(${fitness_app}) center/cover no-repeat`,
                                opacity: 0.5,
                            }}
                        ></div>
                    </div>
                    <div
                        className={cls.column}
                        onClick={() => navigate(RoutePath.project_ulbi)}
                    >
                        <h2>Ulbi TV pet-project </h2>
                        <div
                            className={cls.img}
                            style={{
                                background: `url(${default_icon}) center/cover no-repeat`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectPage;
