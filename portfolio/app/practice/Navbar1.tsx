"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
    name: string;
    href: string;
};

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/practice" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav
                className="
                fixed top-4 left-1/2 -translate-x-1/2
                w-[95%] max-w-7xl z-50
                bg-white/5 backdrop-blur-xl
                border border-white/10 rounded-xl
                px-4 sm:px-6 lg:px-8
                h-16
                flex items-center
                relative
                "
            >
                {/* Logo */}
                <div className="text-xl font-bold tracking-tight text-white">
                    Logo
                </div>

                {/* Center Links */}
                <div
                    className="
                    absolute left-1/2 -translate-x-1/2
                    hidden md:flex items-center gap-8
                    "
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                            relative
                            text-sm
                            font-medium
                            tracking-wide
                            uppercase
                            transition-colors
                            duration-300
                            ${pathname === item.href
                                    ? "text-green-400"
                                    : "text-zinc-300 hover:text-white"
                                }
                            `}
                        >
                            {item.name}

                            {pathname === item.href && (
                                <span
                                    className="
                                    absolute
                                    left-0
                                    -bottom-1
                                    block
                                    h-[2px]
                                    w-full
                                    bg-green-400
                                    rounded-full
                                    "
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Desktop Login */}
                <div className="hidden md:block ml-auto">
                    <Link
                        href="/login"
                        className="
                        px-4 py-2
                        rounded-lg
                        bg-blue-600
                        hover:bg-blue-500
                        transition-colors
                        text-white
                        text-sm
                        font-semibold
                        "
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden ml-auto text-white text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`
                fixed top-24 left-1/2 -translate-x-1/2
                w-[95%] max-w-7xl z-40
                md:hidden
                overflow-hidden
                transition-all duration-300
                ${open
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >
                <div
                    className="
                    bg-zinc-950/90
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-4
                    flex flex-col gap-4
                    "
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`
                            p-2 rounded-lg transition-colors
                            ${pathname === item.href
                                    ? "bg-green-500/20 text-green-400"
                                    : "text-zinc-300 hover:bg-white/10"
                                }
                            `}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Mobile Login */}
                    <Link
                        href="/login"
                        onClick={() => setOpen(false)}
                        className="
                        p-2
                        rounded-lg
                        bg-blue-600
                        hover:bg-blue-500
                        text-center
                        text-white
                        font-semibold
                        transition-colors
                        "
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}