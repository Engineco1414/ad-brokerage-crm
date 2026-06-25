type Lead = {
  name: string;
  state: string;
};

type Props = {
  leads: Lead[];
  currentLead: number;
  setCurrentLead: (index: number) => void;
};

export default function LeadList({
  leads,
  currentLead,
  setCurrentLead,
}: Props) {
  return (
    <div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6 flex flex-col">

      <h2 className="text-xl font-bold mb-4">
        Leads
      </h2>

      <div className="space-y-3 overflow-y-auto flex-1">

        {leads.map((lead, index) => (

          <button
            key={index}
            onClick={() => setCurrentLead(index)}
            className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
              currentLead === index
                ? "bg-[#1A2C4A] border-yellow-500 shadow-lg"
                : "bg-[#081529] border-slate-700 hover:border-slate-500 hover:bg-[#10203A]"
            }`}
          >

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                {lead.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <p className="font-semibold">
                  {lead.name}
                </p>

                <p className="text-xs text-slate-400">
                  {lead.state}
                </p>
              </div>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}
