"use client";

import { useState,useRef,useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [loggedValue, setLoggedValue] = useState<number | null>(null);

    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count;
    }, [count]);


    // function delayed() {
    //     setTimeout(() => {
    //         setLoggedValue(count);
    //     }, 3000);
    // }

    //updated code for fxn... to avoid stale closure problem(js+ react rendering problem)....
    function delayed() {
        setTimeout(() => {
            setLoggedValue(countRef.current);
        }, 3000);
    }


    return (
        <>
            <button
                className="mt-30 mr-130 ml-130 p-4 border rounded-lg hover:bg-green-400"
                onClick={() => setCount((prev) => prev + 1)}
            >
                +
            </button>

            <button
                onClick={delayed}
                className="border rounded p-4 mr-140 ml-140 mt-10 hover:bg-red-400"
            >
                Log
            </button>

            <p className="text-center border rounded-xl mt-10 p-4 mr-145 ml-145">
                Count: {count}
            </p>

            <p className="text-center border rounded-xl mt-5 p-4 mr-140 ml-140">
                Logged Value: {loggedValue}
            </p>
        </>
    );
}