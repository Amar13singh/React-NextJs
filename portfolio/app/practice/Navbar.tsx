"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/practice" },
    { name: "Contact", href: "/contacts" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Close drawer on route change
    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <>
            {/* ── Floating Navbar ── */}
            <nav
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className={`
                    fixed top-4 left-1/2 -translate-x-1/2
                    w-[95%] max-w-6xl z-50
                    h-[60px] px-5
                    flex items-center
                    rounded-[14px]
                    border
                    transition-all duration-500
                    ${scrolled
                        ? "bg-[#070b16]/90 border-[#64dcff]/20 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
                        : "bg-[#080c14]/70 border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    }
                    backdrop-blur-xl
                `}
            >
                {/* Top shimmer line */}
                <div
                    className="absolute top-0 left-6 right-6 h-px rounded-full pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, rgba(100,220,255,0.35), rgba(155,111,255,0.35), transparent)",
                    }}
                />

                {/* ── Logo ── */}
                <Link
                    href="/"
                    className="flex items-center gap-2 flex-shrink-0 group"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                >
                    {/* Pulsing status dot */}
                    <span className="relative flex h-[7px] w-[7px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64dcff] opacity-50" />
                        <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#64dcff] shadow-[0_0_8px_#64dcff]" />
                    </span>
                    <span className="text-[15px] font-bold tracking-[0.06em] text-[#e2eeff] group-hover:text-white transition-colors">
                        AMAR.DEV
                    </span>
                </Link>

                {/* ── Center Nav Links ── */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    relative px-[14px] py-2 rounded-lg
                                    text-[11px] tracking-[0.12em] uppercase
                                    transition-all duration-200
                                    ${active
                                        ? "text-[#64dcff] bg-[#64dcff]/[0.06]"
                                        : "text-[#7a8aaa] hover:text-[#c8daf5] hover:bg-white/[0.03]"
                                    }
                                `}
                                style={{ fontFamily: "'Space Mono', monospace" }}
                            >
                                {item.name}

                                {/* Active indicator bar */}
                                {active && (
                                    <span
                                        className="absolute bottom-[3px] left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full"
                                        style={{
                                            background: "#64dcff",
                                            boxShadow: "0 0 6px #64dcff",
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* ── Right Side ── */}
                <div className="hidden md:flex items-center gap-3 ml-auto">
                    {/* Status badge */}
                    <div
                        className="flex items-center gap-[6px] px-[10px] py-1 rounded-[6px] border text-[10px] tracking-[0.08em]"
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "#64dcff",
                            background: "rgba(100,220,255,0.06)",
                            borderColor: "rgba(100,220,255,0.2)",
                        }}
                    >
                        <span
                            className="inline-block w-[5px] h-[5px] rounded-full"
                            style={{
                                background: "#64dcff",
                                boxShadow: "0 0 5px #64dcff",
                            }}
                        />
                        AVAILABLE
                    </div>

                    {/* Login Button */}
                    <Link
                        href="/login"
                        className="
                            px-[18px] py-2 rounded-[9px]
                            text-[13px] font-semibold tracking-[0.02em]
                            text-[#080c14]
                            transition-all duration-200
                            hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                        "
                        style={{
                            background: "linear-gradient(135deg, #64dcff 0%, #9b6fff 100%)",
                        }}
                    >
                        Login
                    </Link>
                </div>

                {/* ── Mobile Hamburger ── */}
                <button
                    className="md:hidden ml-auto flex flex-col gap-[5px] p-1 group"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    <span
                        className={`block h-[1.5px] w-6 rounded-full transition-all duration-300 origin-center ${open
                                ? "translate-y-[6.5px] rotate-45 bg-[#64dcff]"
                                : "bg-[#7a8aaa] group-hover:bg-white"
                            }`}
                    />
                    <span
                        className={`block h-[1.5px] w-4 rounded-full transition-all duration-300 ${open ? "opacity-0" : "bg-[#7a8aaa] group-hover:bg-white"
                            }`}
                    />
                    <span
                        className={`block h-[1.5px] w-6 rounded-full transition-all duration-300 origin-center ${open
                                ? "-translate-y-[6.5px] -rotate-45 bg-[#64dcff]"
                                : "bg-[#7a8aaa] group-hover:bg-white"
                            }`}
                    />
                </button>
            </nav>

            {/* ── Mobile Drawer ── */}
            <div
                className={`
                    fixed top-[84px] left-1/2 -translate-x-1/2
                    w-[95%] max-w-6xl z-40
                    md:hidden
                    overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div
                    className="
                        rounded-[14px] border p-3
                        backdrop-blur-xl
                        flex flex-col gap-1
                    "
                    style={{
                        background: "rgba(7,11,22,0.95)",
                        borderColor: "rgba(100,220,255,0.12)",
                    }}
                >
                    {/* Top shimmer */}
                    <div
                        className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(100,220,255,0.3), rgba(155,111,255,0.3), transparent)",
                        }}
                    />

                    {navItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`
                                    flex items-center gap-3
                                    px-4 py-3 rounded-[10px]
                                    text-[11px] tracking-[0.12em] uppercase
                                    transition-all duration-200
                                    ${active
                                        ? "text-[#64dcff] bg-[#64dcff]/[0.07]"
                                        : "text-[#7a8aaa] hover:text-[#c8daf5] hover:bg-white/[0.04]"
                                    }
                                `}
                                style={{ fontFamily: "'Space Mono', monospace" }}
                            >
                                {active && (
                                    <span
                                        className="inline-block w-[5px] h-[5px] rounded-full flex-shrink-0"
                                        style={{
                                            background: "#64dcff",
                                            boxShadow: "0 0 5px #64dcff",
                                        }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="mt-1 pt-2 border-t" style={{ borderColor: "rgba(100,220,255,0.08)" }}>
                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="
                                block text-center
                                px-4 py-3 rounded-[10px]
                                text-[13px] font-semibold
                                text-[#080c14]
                                transition-all duration-200
                                hover:opacity-90 active:scale-[0.98]
                            "
                            style={{
                                background: "linear-gradient(135deg, #64dcff 0%, #9b6fff 100%)",
                            }}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}