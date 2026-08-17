'use client';

import Link from 'next/link';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center py-32 px-6 text-center bg-navy-dark text-white select-none relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] opacity-40 z-0" />

      <div className="relative z-10 space-y-6 max-w-md">
        {/* Shield Icon Alert */}
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-bright mx-auto shadow-inner">
          <ShieldAlert size={28} />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-bright">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            The page you are looking for does not exist, has been removed, or is temporarily offline.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer active:scale-95"
          >
            <Home size={14} /> Back to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-colors cursor-pointer active:scale-95"
          >
            <ArrowLeft size={14} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
