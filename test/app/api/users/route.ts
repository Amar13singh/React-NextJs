// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/user";

// export async function GET() {
//     await connectDB();

//     const users = await User.find();

//     return Response.json(users);
// }

// export async function POST(request: Request) {
//     await connectDB();

//     const body = await request.json();

//     const user = await User.create(body);

//     return Response.json(user);
// }

export async function GET() {
    return Response.json({
        message: "Hello World"
    });
}