type Props = {
  totalLeads: number;
  callsMade: number;
  appointments: number;
  notInterested: number;
  didNotAnswer: number;
  doNotCall: number;
};

export default function DashboardStats({
  totalLeads,
  callsMade,
  appointments,
  notInterested,
  didNotAnswer,
  doNotCall,
}: Props) {
  return (
    <div className="grid grid-cols-6 gap-6 mb-8">

      <div className="bg-[#0F1F35] rounded-2xl p-5">
        <p className="text-slate-400">Total Leads</p>
        <h2 className="text-3xl font-bold text-yellow-400">
          {totalLeads}
        </h2>
      </div>

      <div className="bg-[#0F1F35] rounded-2xl p-5">
        <p className="text-slate-400">Calls Made</p>
        <h2 className="text-3xl font-bold text-green-400">
          {callsMade}
        </h2>
      </div>

      <div className="bg-[#0F1F35] rounded-2xl p-5">
        <p className="text-slate-400">Appointments</p>
        <h2 className="text-3xl font-bold text-purple-400">
          {appointments}
        </h2>
      </div>

      <div className="bg-[#0F1F35] rounded-2xl p-5">
        <p className="text-slate-400">Not Interested</p>
        <h2 className="text-3xl font-bold text-yellow-300">
          {notInterested}
        </h2>
      </div>

      <div className="bg-[#0F1F35] rounded-2xl p-5">
        <p className="text-slate-400">Did Not Answer</p>
        <h2 className="text-3xl font-bold text-red-400">
          {didNotAnswer}
        </h2>
      </div>

      <div className="bg-[#0F1F35] rounded-2xl p-5">
        <p className="text-slate-400">Do Not Call</p>
        <h2 className="text-3xl font-bold text-gray-400">
          {doNotCall}
        </h2>
      </div>

    </div>
  );
}