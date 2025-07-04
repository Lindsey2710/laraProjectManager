import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div 
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
            style={{
                backgroundImage: 'url(/img/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div>
                <Link href="/">
                    <img
                        src="../img/tasksupervisor.png"
                        className="block h-35 w-20 fill-current"
                    />
                    {/* <ApplicationLogo className=" text-gray-800 dark:text-gray-200" /> */}
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

