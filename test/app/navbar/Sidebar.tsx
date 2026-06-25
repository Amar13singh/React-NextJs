"use client";

import { activityItems } from "../constants/sidebar";

interface Props {
    active: string;
    setActive: (value: string) => void;
}

export default function ActivityBar({
    active,
    setActive,
}: Props) {
    return (
        <div className="
                    w-16 mt-15
                    bg-zinc-950
                    border-r
                    border-zinc-800
                    flex
                    flex-col
                    items-center
                    p-4
                    "
        >
            <div className="mb-10 text-xl">
                ⚡
            </div>

            <div className="space-y-3">
                {activityItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() =>
                                setActive(item.id)
                            }
                            className={`
                p-3
                rounded-xl
                transition-all
                ${active === item.id
                                    ? "bg-blue-500 text-white"
                                    : "text-zinc-500 hover:bg-zinc-800"
                                }
                            `}
                        >
                            <Icon size={22} />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}