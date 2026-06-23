import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081529] flex items-center justify-center relative overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="text-center z-10">

        <h1 className="text-8xl font-black tracking-widest bg-gradient-to-b from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
          AD
        </h1>

        <h2 className="text-5xl font-bold text-slate-200 mb-6">
          BROKERAGE
        </h2>

        <p className="text-xl text-slate-300 mb-10">
          The All-In-One CRM Built For Life Insurance Agents
        </p>

        <Link
          href="/dashboard"
          className="
            px-10
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
            text-black
            font-bold
            text-lg
            hover:scale-105
            transition
          "
        >
          OPEN CRM
        </Link>

      </div>
    </main>
  );
}