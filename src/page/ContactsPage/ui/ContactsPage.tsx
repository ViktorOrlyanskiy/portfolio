import { FC } from "react";

import { TitleBlock } from "shared/ui";
import cls from "./ContactsPage.module.scss";

const ContactsPage: FC = () => {
    return (
        <div>
            <section className={cls.wrapper}>
                <TitleBlock
                    title="Контакты"
                    subtitles={[
                        <>
                            Телефон:
                            <a
                                href="tel:+79990279405"
                                className={cls.link}
                                target="blank"
                            >
                                +7(999)-027-94-05
                            </a>
                        </>,
                        <>
                            WatsApp:
                            <a
                                href="https://wa.me/+79990279405"
                                className={cls.link}
                                target="blank"
                            >
                                +7(999)-027-94-05
                            </a>
                        </>,
                        <>
                            Email:
                            <span className={cls.link}>
                                orlianskiyviktor@yandex.ru
                            </span>
                        </>,
                        <>
                            GitHub:
                            <a
                                href="https://github.com/ViktorOrlyanskiy"
                                className={cls.link}
                                target="blank"
                            >
                                www.github.com/viktor-orlyanskiy
                            </a>
                        </>,
                        <>
                            HeadHunter:
                            <a
                                href="https://spb.hh.ru/applicant/resumes/view?resume=5ad5e156ff0b54e91f0039ed1f594d31697174"
                                className={cls.link}
                                target="blank"
                            >
                                www.hh.ru/viktor-orlyanskiy
                            </a>
                        </>,
                    ]}
                />
            </section>
        </div>
    );
};
export default ContactsPage;
