import { Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "page/MainPage";
import { ProjectPage } from "page/ProjectPage";
import { ContactsPage } from "page/ContactsPage";
import { PageLoader } from "widgets/PageLoader";
import { RoutePath } from "shared/const";

export const AppRouter: FC = () => (
    <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path={RoutePath.main} element={<MainPage />} />
                <Route path={RoutePath.project} element={<ProjectPage />} />
                <Route path={RoutePath.contacts} element={<ContactsPage />} />
            </Routes>
        </Suspense>
    </div>
);
