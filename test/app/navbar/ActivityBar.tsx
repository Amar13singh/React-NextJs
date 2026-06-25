"use client";

import { activityItems } from "../constants/sidebar";
import posthog from "posthog-js";

interface Props {
    active: string;
    setActive: React.Dispatch<
        React.SetStateAction<string>
    >;
}

export default function ActivityBar({
    active,
    setActive,
}: Props) {
    return (
        <div className="w-16 bg-zinc-950 flex flex-col items-center p-4">
            <div className="space-y-3">
                {activityItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActive(item.id);
                                posthog.capture("activity_bar_item_clicked", { item_id: item.id });
                            }}
                            className={`
                p-3 rounded-xl
                ${active === item.id
                                    ? "bg-blue-900"
                                    : "hover:bg-zinc-800"
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