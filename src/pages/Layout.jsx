import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        
        <div className="flex h-screen bg-gray-900 text-gray-300">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 p-6 overflow-y-auto">
                <h1 className="text-teal-400 text-2xl font-bold mb-8">PGAGI's Assistant</h1>
                <nav>
                    <ul className="space-y-2">
                        <li><Link to={'/overview'} className="block py-2 px-4 hover:bg-gray-700 rounded">Overview</Link></li>
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                                    Campaign Related
                                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </summary>
                                <ul className="pl-4 mt-2 space-y-1">
                                    <li><Link to="/supported-languages" className="block py-2 px-4 hover:bg-gray-700 rounded">Supported Languages</Link></li>
                                    <li><Link to="/supported-voices" className="block py-2 px-4 hover:bg-gray-700 rounded">Supported Voices</Link></li>
                                    <li><Link to="/create" className="block py-2 px-4 hover:bg-gray-700 rounded">Create Campaign</Link></li>
                                    <li><Link to="/update_campaign" className="block py-2 px-4 hover:bg-gray-700 rounded">Update Campaign</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                                    Voice Library
                                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </summary>
                                <ul className="pl-4 mt-2 space-y-1">
                                    <li> <Link to="/make_call" className="block py-2 px-4 hover:bg-gray-700 rounded">Make Call</Link></li>
                                    <li> <Link to="/getStatus" className="block py-2 px-4 hover:bg-gray-700 rounded">Call Status</Link></li>
                                    <li> <Link to="/getTranscription" className="block py-2 px-4 hover:bg-gray-700 rounded">Get Transcription</Link></li>
                                    <li> <Link to="/postCallAnalysis" className="block py-2 px-4 hover:bg-gray-700 rounded">Post Call Analysis</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-10">
                <Outlet />
            </main>

            {/* Profile and Ask AI buttons */}
            {/* ... */}
        </div>
    );
};

export default Layout;