import { FC } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "shared/assets";
import { RoutePath } from "shared/const";
import { Button } from "shared/ui";
import cls from "./MainPage.module.scss";

const MainPage: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <section
                id="main-section-1"
                className={`${cls.wrapper} ${cls.first}`}
            >
                <div className={cls.about}>
                    <div className={cls.name}>Виктор Орлянский</div>
                    <div className={cls.profession}>frontend-developer</div>
                </div>
                <Button
                    onClick={() => navigate(RoutePath.contacts)}
                    className={cls.btn}
                >
                    контакты
                </Button>
                <div className={cls.bottom}>
                    <div></div>
                    <div>skills</div>
                    <Link to="main-section-2" smooth={true} duration={500}>
                        <ArrowDown />
                    </Link>
                </div>
            </section>
            <section id="main-section-2" className={cls.wrapper}>
                <div className={cls.row}>
                    <div className={cls.column}>
                        <h2>Hard</h2>
                        <div className={cls.block}>
                            <p>Использую каждый день:</p>
                            <div>
                                <span>HTML5</span>
                                <span>CSS / SASS</span>
                                <span>JAVASCRIPT / TYPESCRIPT</span>
                                <br />
                                <span>REACT</span>
                                <span>REDUX TOOLKIT</span>
                                <span>GIT</span>
                            </div>

                            <p>Был опыт работы:</p>
                            <div>
                                <span>WEBPACK</span>
                                <span>FIREBASE</span>
                                <span>I18NEXT</span>
                                <span>FSD</span>
                                <span>CHART</span>
                                <span>RHF / FORMIK / YUP</span>
                            </div>
                            <p>Знаком / Изучаю:</p>
                            <div>
                                <span>JEST</span>
                                <span>RTL</span>
                                <span>STORYBOOK</span>
                                <span>LOKI</span>
                            </div>
                        </div>
                    </div>
                    <div className={cls.column}>
                        <h2>Soft</h2>
                        <div className={cls.block}>
                            <p>
                                Самостоятельный — сначала пробую самостоятельно
                                разобраться в вопросе, и если не получается -
                                обращаюсь за помощью. Умею находить нужную
                                информацию в интернете.
                            </p>

                            <p>
                                Целеустремленный — добиваюсь поставленных целей.
                                <br /> 1.5 года назад поставил цель стать
                                Frontend-разработчиком. Обучался самостоятельно
                                в свободное от основной работы времени. 80% в
                                промежуток с 19:00 до 02:00.
                            </p>
                            <p>
                                Ответственный и внимательный к деталям —
                                соблюдаю дедлайны, не совершаю грубых ошибок.
                            </p>
                            <p>
                                Перфекционист на 80% — в ПК всегда порядок,
                                рабочий стол пустой. В проектах использую
                                методологию Feature-Sliced Design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cls.bottom}>
                    <div></div>
                    <div>what now?</div>
                    <Link to="main-section-3" smooth={true} duration={500}>
                        <ArrowDown />
                    </Link>
                </div>
            </section>
            <section id="main-section-3" className={cls.wrapper}>
                <div className={cls.about}>
                    <div className={cls.name}>Что сейчас?</div>
                    <div className={cls.profession}>
                        Сейчас я прохожу обучение у автора YouTube-канала Ulbi
                        TV. <br /> Один из самых топовых рускоязычных каналов
                        для фронтенд-разработчиков.
                        <br /> План обучения приложил в проекте.
                    </div>
                </div>
                <Button
                    onClick={() => navigate(RoutePath.project)}
                    className={cls.btn}
                >
                    проекты
                </Button>
                <div className={cls.bottom}>
                    <div></div>
                    <div>up</div>
                    <Link
                        to="main-section-1"
                        smooth={true}
                        duration={500}
                        className={cls.linkUp}
                    >
                        <ArrowDown />
                    </Link>
                </div>
            </section>
        </>
    );
};
export default MainPage;
