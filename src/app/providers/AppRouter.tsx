import { Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "page/MainPage";
import { ProjectPage } from "page/ProjectPage";
import { ContactsPage } from "page/ContactsPage";
import { PageLoader } from "widgets/PageLoader";
import { RoutePath } from "shared/const";
import { ProjectFitnessPage } from "page/ProjectFitnessPage";
import { ProjectUlbiPage } from "page/ProjectUlbiPage";

export const AppRouter: FC = () => (
    <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path={RoutePath.main} element={<MainPage />} />
                <Route path={RoutePath.project} element={<ProjectPage />} />
                <Route path={RoutePath.contacts} element={<ContactsPage />} />
                <Route
                    path={RoutePath.project_fitness}
                    element={<ProjectFitnessPage />}
                />
                <Route
                    path={RoutePath.project_ulbi}
                    element={<ProjectUlbiPage />}
                />
            </Routes>
        </Suspense>
    </div>
);
