import { FC } from "react";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";

export const App: FC = () => {
    return (
        <div className="main-container">
            <Navbar />
            <AppRouter />
        </div>
    );
};
