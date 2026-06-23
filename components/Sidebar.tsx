import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#0F1F35] border-r border-yellow-500/20 p-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10">
        AD CRM
      </h2>

      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-3 rounded-xl hover:bg-[#162B49]">
          Dashboard
        </Link>

        <Link href="/leads" className="block p-3 rounded-xl hover:bg-[#162B49]">
          Leads
        </Link>

        <Link href="/appointments" className="block p-3 rounded-xl hover:bg-[#162B49]">
          Appointments
        </Link>

        <Link href="/clients" className="block p-3 rounded-xl hover:bg-[#162B49]">
          Clients
        </Link>

        <Link href="/earnings" className="block p-3 rounded-xl hover:bg-[#162B49]">
          My Earnings
        </Link>

        <Link href="/goals" className="block p-3 rounded-xl hover:bg-[#162B49]">
          Goals
        </Link>

        <Link href="/ai-coach" className="block p-3 rounded-xl hover:bg-[#162B49]">
          AI Coach
        </Link>

        <Link href="/settings" className="block p-3 rounded-xl hover:bg-[#162B49]">
          Settings
        </Link>
      </nav>
    </aside>
  );
}