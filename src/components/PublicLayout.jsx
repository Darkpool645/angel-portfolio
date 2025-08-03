import { Outlet } from "react-router-dom";
import StarsCanvas from "@/components/StarsCanvas.jsx";

const PublicLayout = () => {
    return (
        <div className={"relative min-h-screen"}>
            <StarsCanvas/>
            <main className={"relative z-10"}>
                <Outlet/>
            </main>
        </div>
    );
};

export default PublicLayout;