
const NotFoundPage = () => {
    return (
        <div className={"grid min-h-dvh place-items-center px-6 py-24 sm:py-32 lg:px-8"}>
            <div className={"text-center"}>
                <p className={"font-semibold dark:text-white"}>404</p>
                <h1 className={"mt-4 text-5xl font-semibold tracking-thight text-balance dark:text-white sm:text-7xl"}>
                    Page not Found
                </h1>
                <p className={"mt-6 text-lg font-medium text-pretty dark:text-white sm:text-xl/8"}>
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className={"mt-10 flex items-center justify-center gap-x-6"}>
                    <a href={"/"} className={"rounded-md transition-colors duration-300 bg-white/20 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-white/30 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-white"}>
                    Go back home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;