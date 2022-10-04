import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/const";
import { Button, LinkDown, RowBlock, TitleBlock } from "shared/ui";
import cls from "./MainPage.module.scss";

const MainPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section
                id="main-section-1"
                className={`${cls.wrapper} ${cls.first}`}
            >
                <TitleBlock
                    title="Виктор Орлянский"
                    subtitles={["frontend-developer"]}
                />
                <Button
                    onClick={() => navigate(RoutePath.contacts)}
                    className={cls.btn}
                >
                    контакты
                </Button>
                <LinkDown to="main-section-2">skills</LinkDown>
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
                <LinkDown to="main-section-3">what now?</LinkDown>
            </section>

            <section id="main-section-3" className={cls.wrapper}>
                <TitleBlock
                    title="Что сейчас?"
                    subtitles={[
                        "Сейчас я прохожу обучение у автора YouTube-канала Ulbi TV.",
                        "Один из самых топовых рускоязычных каналов для фронтенд-разработчиков.",
                        "План обучения приложил в проекте. Продолжительность: сентябрь — декабрь.",
                    ]}
                />
                <Button
                    onClick={() => navigate(RoutePath.project)}
                    className={cls.btn}
                >
                    проекты
                </Button>
                <LinkDown up to="main-section-1" className={cls.linkUp}>
                    up
                </LinkDown>
            </section>
        </div>
    );
};
export default MainPage;
