import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 sm:px-8 font-sans selection:bg-emerald-500 selection:text-white">
            <div className="max-w-md w-full text-center space-y-6">

                {/* 404 Image Container (Loaded directly from public folder) */}
                <div className="relative w-full flex justify-center">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none"></div>
                    <img
                        src="/404img.gif"
                        alt="404 Not Found"
                        className="relative w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-md"
                    />
                </div>

                {/* Action Button */}
                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-black text-white font-bold tracking-wider rounded-lg hover:bg-emerald-600 hover:text-black transition-all shadow-lg"
                    >
                        RETURN TO HOME
                    </Link>
                </div>

            </div>
        </div>
    );
}