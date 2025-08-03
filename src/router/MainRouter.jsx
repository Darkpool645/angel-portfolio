import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loader = lazy(()=> import("@/components/Loader.jsx"));

const PublicLayout = lazy(() => import("@/components/PublicLayout.jsx"));

const LandingPage = lazy(() => import("@/screens/LandingPage.jsx"));

const router = createBrowserRouter([
    { path: '/', element: (<Suspense fallback={<Loader/>}><PublicLayout/></Suspense> ), children: [
            { index: true, element: <LandingPage/>}
        ]}
]);

export default router;