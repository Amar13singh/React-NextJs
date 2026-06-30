import Practice from "./practice/Navbar";


export default function Home() {
  const skills = ["TypeScript", "React", "Next.js"];

  return (
    <>
      {/* <Practice/> */}
      {/* trying for sidebar */}
      
      <div className="mt-30 items-center ml-1 flex-col flex-left">
        <div className="border  rounded-xl p-5 mr-290 flex-col items-center justify-evenly">
              <div className="p-4 ">A</div>
              <div className="p-4 ">B</div>
              <div className="p-4 ">B</div>
              <div className="p-4 ">B</div>
              <div className="p-4 ">B</div>
              <div className="p-4 ">B</div>
        </div>
      </div>
  
    <main className="bg-black text-white min-h-screen mt-30 ml-10">
      <p className="m-12 text-blue-500 font-bold">
        Hi, this is Next.js
      </p>

      <ul className="ml-12 list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <section className="flex h-screen flex-col items-center justify-center bg-zinc-800">
        <h1 className="text-5xl font-bold text-red-500">
          Amar Singh
        </h1>

        <p className="mt-2 text-xl text-white-800">
          AI Researcher
        </p>
        <p className="text-white-800"> Alpha</p>
      </section>
      </main>
      </>
  );
}
