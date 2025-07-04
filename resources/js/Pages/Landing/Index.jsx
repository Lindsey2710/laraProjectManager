import { Link, Head } from "@inertiajs/react";

export default function Landing() {
    return (
        <>
            <Head title="Project Manager - Welcome" />
            
            <div 
                className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
                style={{
                    backgroundImage: 'url(/img/background.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Logo Section */}
                <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                    <Link href="/">
                        <img
                            src="/img/tasksupervisor.png"
                            className="block h-35 w-20 fill-current drop-shadow-lg"
                            alt="Taskly"
                        />
                    </Link>
                </div>

                {/* Main Content Card */}
                <div className="w-full sm:max-w-5xl mt-6 px-8 py-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden sm:rounded-2xl">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-6">
                            Welcome to Taskly
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Streamline your project management with our comprehensive tool. 
                            Create projects, assign tasks, track progress, and collaborate with your team seamlessly.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href={route('register')}
                                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 border border-transparent rounded-xl font-semibold text-sm text-white uppercase tracking-wider shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300"
                            >
                                Get Started
                                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href={route('login')}
                                className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300"
                            >
                                Sign In
                                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-blue-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    Project Management
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Create and organize projects with detailed information, status tracking, and team collaboration.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-green-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                    Task Management
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Assign tasks to team members, track progress, and manage deadlines efficiently.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-purple-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                    Team Collaboration
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Work together with your team members, assign roles, and share project updates.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-orange-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                                    Progress Tracking
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Monitor project progress with real-time updates and comprehensive reporting.
                            </p>
                        </div>
                    </div>

                    {/* Important Notice */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                                    Important Notice
                                </h3>
                                <div className="text-amber-700 dark:text-amber-300 space-y-2">
                                    <p>
                                        <strong>Desktop Version Only:</strong> This application is currently optimized for desktop use. 
                                        For the best experience, please access from a computer or laptop.
                                    </p>
                                    <p>
                                        <strong>Need Help?</strong> For support, questions, or to report issues, please contact us at:{' '}
                                        <a 
                                            href="mailto:linkatver@gmail.com" 
                                            className="underline hover:text-amber-900 dark:hover:text-amber-100 transition-colors duration-200"
                                        >
                                            linkatver@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            &copy; 2025 Taskly. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
