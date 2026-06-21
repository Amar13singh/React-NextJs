


// export default function Practice() {
//     return (
//         <div className="p-10 border mt-30">

//             <div className="flex flex border justify-center">
//                 <div className="p-4 border">A</div>
//                 <div className="p-4 border">B</div>
//                 <div className="p-4 border">C</div>
//             </div>


//             <div className="
//                 h-60
//                 flex
//                 justify-center
//                 border items-center
//                 ">
//                 <div className="border p-8 bg-orange-200 text-gray-800">
//                     BOX1
//                 </div>
//                 <div className="border p-8">Box2</div>
//                 <div className="border p-8">Box3</div>
//             </div>


//         </div>
//     );
// }

//building Navbar...

// import Link from "next/link";

// export default function Navbar() {
//     return (
//         <>
//             <nav className=" flex justify-between h-16 items-center
//                     fixed top-4 left-1/2
//                     -translate-x-1/2
//                     w-[95%]
//                     max-w-7xl bg-white/5
//                     backdrop-blur-xl
                    
//                     border border-white/10 rounded-2xl
//                     ">
//             <Link href="/" className="ml-10">Home</Link>
//                 <div className="flex gap-18">
//                     {/* <div className="">About</div> */}
//                     <Link href="/About">About</Link>

//                     {/* <div className="">Student</div> */}
//                     <Link href="/student">Student</Link>

//                     {/* <div className="">Institute</div> */}
//                     <Link href="/Institute">Institute</Link>

//                     {/* <div className="">Admin</div> */}
//                     <Link href="/Admin">Admin</Link>

//                     <Link href="/login" className="mr-10">Login/SignUp</Link>
//             </div>
//         </nav>
            
            
//         </>
//     );
// }


import React from "react";

function Icon() {
    return <span className="text-blue-400 text-base">⚙</span>;
}

function Badge() {
    return (
        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
            Active
        </span>
    );
}

function Row() {
    return (
        <div className="flex items-center gap-2 text-[#a0b4d0] text-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400/60" />
            <span>Row item</span>
        </div>
    );
}

function Button({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "ghost" | "primary";
}) {
    return (
        <button
            className={
                variant === "primary"
                    ? "px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500"
                    : "px-4 py-1.5 rounded-lg text-[#a0b4d0] text-sm hover:bg-white/5"
            }
        >
            {children}
        </button>
    );
}

export default function Page() {
    return (
        <>
            <div className=" mt-30 bg-[#0f1420] border border-white/10 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                <div className="p-5">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Icon />
                            <h3 className="text-[#e2eeff] text-[15px] font-semibold">Title</h3>
                        </div>
                        <Badge />
                    </div>

                    <div className="h-px bg-white/[0.06] my-4" />

                    {/* Body */}
                    <div className="flex flex-col gap-3">
                        <Row />
                        <Row />
                        <Row />
                    </div>

                    <div className="h-px bg-white/[0.06] my-4" />

                    {/* Footer */}
                    <div className="flex justify-end gap-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button variant="primary">Submit</Button>
                    </div>

                </div>
            </div>
        </>
    );
}