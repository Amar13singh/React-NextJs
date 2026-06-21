export default function Practice() {
    return (
        <div className="p-10 border mt-30">

            <div className="flex border justify-evenly">
                <div className="p-4 border">A</div>
                <div className="flex-1 p-4 border text-center">B</div> 
                <div className="p-4 border">C</div>
            </div>
{/* flex-1 take whole remaining space... */}

            <div className="
                h-80
                flex bg-gray-900
                justify-center
                border items-center">
                <div className="border rounded-xl p-15 bg-orange-200 text-gray-800">
                    Box1
                </div>
                <div className="border rounded-xl p-15 bg-blue-200 text-gray-900">Box2</div>
                <div className="border rounded-xl p-15 bg-green-300 text-gray-900">Box3</div>
            </div>


        </div>
    );
}
