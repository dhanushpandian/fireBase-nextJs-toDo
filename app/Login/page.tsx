'use client'
import Link from 'next/link';

const Page = () => {
  return (
    <div className="h-screen bg-slate-500">
      <Link href="/"className="absolute top-0 left-0 mt-4 ml-4 border-black border-2 px-4 py-2 rounded-md">Go Back to Home</Link>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="border border-slate-200 p-8 rounded-md">
          <h1 className="text-center text-3xl mb-4">Login or Sign Up</h1>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Enter Email ID:</label>
              <input
                type="text"
                name="email"
                className="w-full border border-slate-300 rounded px-2 py-1 outline-none focus:border-slate-100"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Enter Password:</label>
              <input
                type="password"
                name="password"
                className="w-full border border-slate-300 rounded px-2 py-1 outline-none focus:border-slate-100"
              />
            </div>
            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
