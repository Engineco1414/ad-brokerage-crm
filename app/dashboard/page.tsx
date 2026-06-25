"use client";

import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardStats from "../../components/DashboardStats";
export default function Dashboard() {
  const [leads, setLeads] = useState([
    {
      name: "John Smith",
      age: 67,
      phone: "636-555-1234",
      email: "johnsmith@email.com",
      state: "Missouri",
      status: "new",
    },
    {
      name: "Mary Johnson",
      age: 59,
      phone: "314-555-9876",
      email: "mary@email.com",
      state: "Illinois",
      status: "new",
    },
  ]);
  const [search, setSearch] = useState("");
  const [currentLead, setCurrentLead] = useState(0);
  const [showAddLead, setShowAddLead] = useState(false);
  const [activity, setActivity] = useState<string[]>([]);
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadPhone, setNewLeadPhone] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadAge, setNewLeadAge] = useState("");
  const [newLeadState, setNewLeadState] = useState("");

  const appointmentCount = leads.filter(
    (lead) => lead.status === "appointment"
  ).length;
const notInterestedCount = leads.filter(
  (lead) => lead.status === "notInterested"
).length;
const filteredLeads = leads.filter((lead) =>
  lead.name.toLowerCase().includes(search.toLowerCase()) ||
  lead.phone.includes(search) ||
  lead.email.toLowerCase().includes(search.toLowerCase()) ||
  lead.state.toLowerCase().includes(search.toLowerCase())
);
const updateLeadStatus = (status: string) => {
  const updatedLeads = [...leads];

  updatedLeads[currentLead] = {
    ...updatedLeads[currentLead],
    status,
  };

  setLeads(updatedLeads);

  setActivity([
    `${updatedLeads[currentLead].name} marked as ${status}`,
    ...activity,
  ]);
};

  return (
<DashboardLayout>
<div className="flex items-center justify-between mb-8">
  <h1 className="text-4xl font-bold">Dashboard</h1>

  <input
    type="text"
    placeholder="Search leads..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="bg-[#0F1F35] text-white px-4 py-3 rounded-xl w-80 outline-none border border-slate-700 focus:border-yellow-500"
  />
</div>
<DashboardStats
  totalLeads={leads.length}
  callsMade={0}
  appointments={appointmentCount}
  notInterested={notInterestedCount}
  didNotAnswer={0}
  doNotCall={0}
/>

<div className="grid grid-cols-12 gap-6 h-[calc(100vh-250px)]">

  <div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6">
    <h2 className="text-xl font-bold mb-4">
    Recent Activity
  </h2>

<div className="space-y-3 overflow-y-auto flex-1 pr-2">
    {activity.length === 0 ? (
    <p className="text-slate-400">No activity yet.</p>
  ) : (
    activity.map((item, index) => (
      <div
        key={index}
        className="bg-[#081529] rounded-xl p-3 text-sm"
      >
        {item}
      </div>
    ))
  )}
</div>
</div>
<div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6 flex flex-col">

  <h2 className="text-xl font-bold mb-4">
    Leads
  </h2>

  <div className="space-y-3 overflow-y-auto flex-1">

{filteredLeads.map((lead, index) => (
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
      .map(n => n[0])
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
<div className="col-span-6 bg-[#0F1F35] rounded-2xl p-6">
             <div className="flex items-center justify-between mb-6">
  <div>
    <h2 className="text-2xl font-bold">Lead Manager</h2>
    <p className="text-slate-400 text-sm">
      View and manage your current lead.
    </p>
  </div>

  <button
    className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold transition"
    onClick={() => setShowAddLead(!showAddLead)}
  >
    + Add Lead
  </button>
</div>

          {showAddLead && (
            <div className="bg-[#081529] p-4 rounded-xl mb-6">
              <input
                className="w-full mb-3 p-3 rounded-lg bg-[#162B49]"
                placeholder="Lead Name"
                value={newLeadName}
                onChange={(e) => setNewLeadName(e.target.value)}
              />

              <input
                className="w-full mb-3 p-3 rounded-lg bg-[#162B49]"
                placeholder="Phone Number"
                value={newLeadPhone}
                onChange={(e) => setNewLeadPhone(e.target.value)}
              />

              <input
                className="w-full mb-3 p-3 rounded-lg bg-[#162B49]"
                placeholder="Email Address"
                value={newLeadEmail}
                onChange={(e) => setNewLeadEmail(e.target.value)}
              />

              <input
                className="w-full mb-3 p-3 rounded-lg bg-[#162B49]"
                placeholder="Age"
                value={newLeadAge}
                onChange={(e) => setNewLeadAge(e.target.value)}
              />

              <input
                className="w-full mb-3 p-3 rounded-lg bg-[#162B49]"
                placeholder="State"
                value={newLeadState}
                onChange={(e) => setNewLeadState(e.target.value)}
              />

              <button
                className="bg-green-600 px-5 py-3 rounded-xl"
                onClick={() => {
                  if (!newLeadName) return;

                  setLeads([
                    ...leads,
                    {
                      name: newLeadName,
                      age: Number(newLeadAge) || 0,
                      phone: newLeadPhone,
                      email: newLeadEmail,
                      state: newLeadState,
                      status: "new",
                    },
                  ]);

                  setCurrentLead(leads.length);

                  setNewLeadName("");
                  setNewLeadPhone("");
                  setNewLeadEmail("");
                  setNewLeadAge("");
                  setNewLeadState("");

                  setShowAddLead(false);
                }}
              >
                Save Lead
              </button>
            </div>
          )}

<div className="bg-[#081529] border border-slate-700 rounded-3xl p-8 shadow-lg">
<div className="flex items-center justify-between mb-8">

  <div className="flex items-center gap-5">

  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
    {leads[currentLead].name
      .split(" ")
      .map(n => n[0])
      .join("")}
  </div>

  <div>
    <h3 className="text-3xl font-bold">
      {leads[currentLead].name}
    </h3>

    <p className="text-slate-400">
      Current Client
    </p>
  </div>

</div>

  <span
    className={`px-4 py-2 rounded-full font-bold ${
      leads[currentLead].status === "appointment"
        ? "bg-green-600"
        : leads[currentLead].status === "notInterested"
        ? "bg-yellow-500 text-black"
        : leads[currentLead].status === "dnc"
        ? "bg-red-600"
        : "bg-slate-600"
    }`}
  >
    {leads[currentLead].status.toUpperCase()}
  </span>

</div>

<div className="space-y-5 mt-6">
        <div>
      <p className="text-slate-400 text-sm">Full Name</p>
      <p className="text-lg font-semibold">
        {leads[currentLead].name}
      </p>
    </div>

    <div>
      <p className="text-slate-400 text-sm">Age</p>
      <p className="text-lg font-semibold">
        {leads[currentLead].age}
      </p>
    </div>

<div className="flex items-center justify-between bg-[#12233D] border border-slate-700 hover:border-yellow-500 hover:bg-[#18304F] rounded-2xl px-6 py-5 transition-all duration-200">
    <div>
    <p className="text-slate-400 text-sm">
      Phone Number
    </p>

    <p className="text-lg font-semibold">
      {leads[currentLead].phone}
    </p>
  </div>

<button
  className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl font-semibold transition"
>
  Call
</button>

</div>

    <div>
      <p className="text-slate-400 text-sm">Email Address</p>
      <p className="text-lg font-semibold">
        {leads[currentLead].email}
      </p>
    </div>

    <div>
      <p className="text-slate-400 text-sm">State</p>
      <p className="text-lg font-semibold">
        {leads[currentLead].state}
      </p>
    </div>

    <div>
      <p className="text-slate-400 text-sm">Status</p>
      
      <span
  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
    leads[currentLead].status === "appointment"
      ? "bg-green-900 text-green-300"
      : leads[currentLead].status === "notInterested"
      ? "bg-yellow-900 text-yellow-300"
      : leads[currentLead].status === "dna"
      ? "bg-red-900 text-red-300"
      : leads[currentLead].status === "dnc"
      ? "bg-red-900 text-red-300"
      : "bg-green-900 text-green-300"
  }`}
>
  {leads[currentLead].status === "appointment"
    ? "Appointment Set"
    : leads[currentLead].status === "notInterested"
    ? "Not Interested"
    : leads[currentLead].status === "dna"
    ? "Did Not Answer"
    : leads[currentLead].status === "dnc"
    ? "Do Not Call"
    : "New Lead"}
</span>
    </div>

  </div>

</div>

<button
  className="bg-purple-600 px-6 py-3 rounded-xl mt-4"
  onClick={() => updateLeadStatus("appointment")}
>
  Appointment Set
</button>
          <button
  className="bg-yellow-600 px-6 py-3 rounded-xl mt-4 ml-2"
  onClick={() => updateLeadStatus("notInterested")}
>
  Not Interested
</button>

          <div className="flex gap-4 mt-6">
            <button
              className="bg-gray-700 px-6 py-3 rounded-xl"
              onClick={() =>
                setCurrentLead(
                  currentLead > 0
                    ? currentLead - 1
                    : leads.length - 1
                )
              }
            >
              ← Previous Lead
            </button>

            <button
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold"
              onClick={() =>
                setCurrentLead(
                  currentLead < leads.length - 1
                    ? currentLead + 1
                    : 0
                )
              }
            >
              Next Lead →
            </button>
          </div>
        </div>

<div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6 flex flex-col">
    <h2 className="text-xl font-bold mb-4">Notes</h2>
          <textarea
            className="w-full flex-1 bg-[#081529] rounded-xl p-4 resize-none"
            placeholder="Type notes..."
          />
        </div>
      </div>
    </DashboardLayout>
  );
}