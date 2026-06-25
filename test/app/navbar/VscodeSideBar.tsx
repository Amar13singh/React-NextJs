"use client";

import { useState } from "react";

import ActivityBar from "./ActivityBar";
import ExplorerPanel from "./Explorerpanel";

export default function VSCodeSidebar() {
    const [active, setActive] =
        useState("explorer");

    return (
        <div className="flex mt-10 border rounded-2xl ">
            <ActivityBar
                active={active}
                setActive={setActive}
            />

            {/* {active === "explorer" && (
                <ExplorerPanel />
            )} */}

            {active === "search" && (
                <div className="w-72 p-4">
                    Search Panel
                </div>
            )}

            {active === "git" && (
                <div className="w-72 p-4">
                    Source Control
                </div>
            )}
        </div>
    );
}