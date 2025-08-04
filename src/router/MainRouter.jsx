import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loader = lazy(()=> import("@/components/Loader.jsx"));

const PublicLayout = lazy(() => import("@/components/PublicLayout.jsx"));

const LandingPage = lazy(() => import("@/screens/LandingPage.jsx"));
const AboutPage = lazy(() => import("@/screens/AboutPage.jsx"));
const ProjectsPage = lazy(() => import("@/screens/ProjectsPage.jsx"));
const ContactPage = lazy(() => import("@/screens/ContactPage.jsx"));
const NotFoundPage = lazy(() => import("@/screens/NotFoundPage.jsx"));

const router = createBrowserRouter([
    { path: '/', element: (<Suspense fallback={<Loader/>}><PublicLayout/></Suspense> ), children: [
            { index: true, element: <LandingPage />},
            { path: "/about", element: <AboutPage />},
            { path: "/projects", element: <ProjectsPage />},
            { path: "/contact", element: <ContactPage />},
            { path: "*", element: <NotFoundPage /> },
    ]},
]);

export default router;