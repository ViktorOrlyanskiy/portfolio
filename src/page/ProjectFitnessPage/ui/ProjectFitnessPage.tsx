import { FC } from "react";
import { LinkDown, RowBlock, TitleBlock, Button } from "shared/ui";
import cls from "./ProjectFitnessPage.module.scss";
import slide_1 from "shared/assets/img/slide-1.png";
import slide_2 from "shared/assets/img/slide-2.png";
import slide_3 from "shared/assets/img/slide-3.png";
import slide_4 from "shared/assets/img/slide-4.png";
import slide_5 from "shared/assets/img/slide-5.png";

const ProjectFitnessPage: FC = () => {
    return (
        <>
            <section id="fitness-section-1">
                <div className={cls.wrapper}>
                    <RowBlock
                        className={cls.row}
                        firstColumn={
                            <div className={cls.columnLeftText}>
                                <TitleBlock
                                    title="Пора на тренировку"
                                    subtitles={[
                                        "Умный дневник для фитнеса поможет тебе достичь любых целей.",
                                    ]}
                                />
                                <LinkDown
                                    to="fitness-section-2"
                                    className={cls.linkDown}
                                >
                                    next
                                </LinkDown>
                            </div>
                        }
                        lastColumn={
                            <div className={cls.columnImg}>
                                <img src={slide_1} alt="slide" />
                            </div>
                        }
                    />
                </div>
            </section>
            <section id="fitness-section-2">
                <div className={cls.wrapper}>
                    <RowBlock
                        className={cls.row}
                        firstColumn={
                            <div className={cls.columnLeftText}>
                                <TitleBlock
                                    title="Выбирай упражнения"
                                    subtitles={[
                                        "Базовые упражнения уже занесены, осталось выбрать нужное. Также всегда можно добавить свое упражнение.",
                                    ]}
                                />
                                <LinkDown
                                    to="fitness-section-3"
                                    className={cls.linkDown}
                                >
                                    next
                                </LinkDown>
                            </div>
                        }
                        lastColumn={
                            <div className={cls.columnImg}>
                                <img src={slide_2} alt="slide" />
                            </div>
                        }
                    />
                </div>
            </section>
            <section id="fitness-section-3">
                <div className={cls.wrapper}>
                    <RowBlock
                        className={cls.row}
                        firstColumn={
                            <div className={cls.columnLeftText}>
                                <TitleBlock
                                    title="Записывай подходы"
                                    subtitles={[
                                        "Удобный интерфейс для записи текущей тренировки. Предыдущие результаты всегда под рукой.",
                                    ]}
                                />
                                <LinkDown
                                    to="fitness-section-4"
                                    className={cls.linkDown}
                                >
                                    next
                                </LinkDown>
                            </div>
                        }
                        lastColumn={
                            <div className={cls.columnImg}>
                                <img src={slide_3} alt="slide" />
                            </div>
                        }
                    />
                </div>
            </section>
            <section id="fitness-section-4">
                <div className={cls.wrapper}>
                    <RowBlock
                        className={cls.row}
                        firstColumn={
                            <div className={cls.columnLeftText}>
                                <TitleBlock
                                    title="Отслеживай результаты"
                                    subtitles={[
                                        "Статистика ведется по каждому упражнению. Ты всегда будешь в курсе своих результатов.",
                                    ]}
                                />
                                <LinkDown
                                    to="fitness-section-5"
                                    className={cls.linkDown}
                                >
                                    next
                                </LinkDown>
                            </div>
                        }
                        lastColumn={
                            <div className={cls.columnImg}>
                                <img src={slide_4} alt="slide" />
                            </div>
                        }
                    />
                </div>
            </section>
            <section id="fitness-section-5">
                <div className={cls.wrapper}>
                    <RowBlock
                        className={cls.row}
                        firstColumn={
                            <div className={cls.columnLeftText}>
                                <TitleBlock
                                    title="Что под капотом?"
                                    subtitles={[
                                        "Frontend: Typescript / React / Redux",
                                        "Backend: Firebase / Firestore",
                                    ]}
                                    button={
                                        <Button className={cls.btn}>
                                            <a
                                                href="https://fitness-app-27051994.firebaseapp.com/"
                                                target="blank"
                                            >
                                                www.fitness-app.ru
                                            </a>
                                        </Button>
                                    }
                                />
                            </div>
                        }
                        lastColumn={
                            <div className={cls.columnImgMack}>
                                <img src={slide_5} alt="slide" />
                            </div>
                        }
                    />
                    <div className={cls.description}>
                        <div>
                            Приложение написано на функциональных компонентах. В
                            качестве state-менеджера используется Redux Toolkit.
                            Чтобы код оставался чистым старался максимально
                            декомпозировать компоненты, использовать кастомные
                            хуки. Архитектура получилась слегка смешанная, т.к.
                            на момент написания приложения (июнь - сентябрь) с
                            Feature Design Sliced только знакомился.
                        </div>
                        <br />
                        <div>
                            Авторизация и БД реализована с помощью Firebase.
                            Зарегистрироваться и использовать приложение может
                            любой. Сейчас несколько активных пользователей.
                        </div>
                        <br />
                        <div>
                            Приложение не адаптировано под ПК, т.к. нет в этом
                            необходимости. На ПК лучше смотреть через панель
                            разработчика, на экране Iphone SE.
                            <br />
                            <br />
                            Ссылка для мобильного телефона: (можно скопировать /
                            отправить себе в месенджер / открыть на телефоне)
                            <br />
                            <a href="https://fitness-app-27051994.firebaseapp.com/">
                                https://fitness-app-27051994.firebaseapp.com/
                            </a>
                        </div>
                        <br />
                        <div>
                            Тестовый Логин: <span>test@test.ru</span>
                        </div>
                        <div>
                            Тестовый Пароль: <span>test123</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ProjectFitnessPage;
