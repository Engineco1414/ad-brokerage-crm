import DashboardLayout from "../../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-6 gap-4 mb-8">

        <div className="bg-[#0F1F35] rounded-2xl p-5">
          <p className="text-slate-400">Total Leads</p>
          <h2 className="text-3xl font-bold text-yellow-400">523</h2>
        </div>
<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Calls Made</p>
  <h2 className="text-3xl font-bold text-green-400">312</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Appointments</p>
  <h2 className="text-3xl font-bold text-purple-400">43</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Not Interested</p>
  <h2 className="text-3xl font-bold text-yellow-300">102</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Did Not Answer</p>
  <h2 className="text-3xl font-bold text-red-400">118</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Do Not Call</p>
  <h2 className="text-3xl font-bold text-gray-400">22</h2>
</div>      </div>

    </DashboardLayout>
  );
}