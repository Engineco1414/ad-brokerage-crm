export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#081529] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        AD Brokerage CRM
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-[#0F1F35] p-6 rounded-2xl">
          Total Leads
        </div>

        <div className="bg-[#0F1F35] p-6 rounded-2xl">
          Calls Made
        </div>

        <div className="bg-[#0F1F35] p-6 rounded-2xl">
          Appointments
        </div>

      </div>

    </main>
  );
}