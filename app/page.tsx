'use client'
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
 const click=()=>{
  redirect('/Login');
 }
  return (

    <form className="flex flex-col items-center justify-center h-screen bg-slate-500" action={click}>
    <h1 className="text-center	text-3xl text-cyan-50">DASH</h1>
    <button className="mt-8 border-black border-2 px-4 py-2 rounded-md" >Goto Login Page</button>
    </form>
  );
}
