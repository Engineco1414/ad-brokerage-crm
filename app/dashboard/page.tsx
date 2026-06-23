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
          <h2 className="text-3xl font-bold text-yellow-400">0</h2>
        </div>
<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Calls Made</p>
  <h2 className="text-3xl font-bold text-green-400">0</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Appointments</p>
  <h2 className="text-3xl font-bold text-purple-400">0</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Not Interested</p>
  <h2 className="text-3xl font-bold text-yellow-300">0</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Did Not Answer</p>
  <h2 className="text-3xl font-bold text-red-400">0</h2>
</div>

<div className="bg-[#0F1F35] rounded-2xl p-5">
  <p className="text-slate-400">Do Not Call</p>
  <h2 className="text-3xl font-bold text-gray-400">0</h2>
</div>      </div>
<div className="grid grid-cols-12 gap-6 mt-8">

  <div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6">

    <h2 className="text-xl font-bold mb-4">
      Recent Activity
    </h2>

    <div className="space-y-4 text-slate-300">
      <p>No activity yet</p>
    </div>

  </div>

  <div className="col-span-6 bg-[#0F1F35] rounded-2xl p-6">

    <div className="flex justify-between items-center mb-6">

  <h2 className="text-2xl font-bold">
    Lead Manager
  </h2>

  <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold">
    + Add Lead
  </button>

</div>

   <div className="space-y-4">

  <div>
    <strong>Name:</strong> John Smith
  </div>

  <div>
    <strong>Age:</strong> 67
  </div>

  <div>
    <strong>Phone:</strong> 636-555-1234
  </div>

  <div>
    <strong>Email:</strong> johnsmith@email.com
  </div>

  <div>
    <strong>State:</strong> Missouri
  </div>

</div>

    <div className="flex gap-4 mt-8">

      <button className="bg-green-600 px-6 py-3 rounded-xl">
        Call
      </button>

      <button className="bg-blue-600 px-6 py-3 rounded-xl">
        Text
      </button>

      <button className="bg-red-600 px-6 py-3 rounded-xl">
        Do Not Call
      </button>

    </div>
<div className="grid grid-cols-2 gap-3 mt-6">

  <button className="bg-purple-600 p-3 rounded-xl">
    Appointment Set
  </button>

  <button className="bg-yellow-600 p-3 rounded-xl">
    Not Interested
  </button>

  <button className="bg-orange-600 p-3 rounded-xl">
    Did Not Answer
  </button>

  <button className="bg-green-600 p-3 rounded-xl">
    Add As Client
  </button>

</div>
  </div>

  <div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6">

    <h2 className="text-xl font-bold mb-4">
      Notes
    </h2>

    <textarea
      className="w-full h-64 bg-[#081529] rounded-xl p-4"
      placeholder="Type notes..."
    />

  </div>

</div>
    </DashboardLayout>
  );
}