"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-neutral-900 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-red-600">
                        LiveHindustan Clone
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Home</Link>
                        <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Nation</Link>
                        <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">World</Link>
                        <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Cricket</Link>
                        <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Entertainment</Link>
                        <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Tech</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-3">
                            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Home</Link>
                            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Nation</Link>
                            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">World</Link>
                            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Cricket</Link>
                            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Entertainment</Link>
                            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-red-600 font-medium">Tech</Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
