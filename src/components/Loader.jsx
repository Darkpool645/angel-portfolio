const Loader = () => {
    return (
        <div className={"flex items-center justify-center h-screen p-5 bg-gray-100 min-w-screen"}>
            <div className={"flex space-x-2 animate-pulse"}>
                <div className={"size-3 bg-gray-500 rounded-full"}/>
                <div className={"size-3 bg-gray-500 rounded-full"}/>
                <div className={"size-3 bg-gray-500 rounded-full"}/>
            </div>
        </div>
    );
};

export default Loader;