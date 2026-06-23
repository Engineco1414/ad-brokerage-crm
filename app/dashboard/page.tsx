"use client";

import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

export default function Dashboard() {
const [leads, setLeads] = useState([
    {
      name: "John Smith",
      age: 67,
      phone: "636-555-1234",
      email: "johnsmith@email.com",
      state: "Missouri",
    },
    {
      name: "Mary Johnson",
      age: 59,
      phone: "314-555-9876",
      email: "mary@email.com",
      state: "Illinois",
    },
  ]);

  const [currentLead, setCurrentLead] = useState(0);
const [showAddLead, setShowAddLead] = useState(false);
  const [newLeadName, setNewLeadName] = useState("");
const [newLeadPhone, setNewLeadPhone] = useState("");
const [newLeadEmail, setNewLeadEmail] = useState("");
const [newLeadAge, setNewLeadAge] = useState("");
const [newLeadState, setNewLeadState] = useState("");
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-6 gap-4 mb-8">

        <div className="bg-[#0F1F35] rounded-2xl p-5">
          <p className="text-slate-400">Total Leads</p>
<h2 className="text-3xl font-bold text-yellow-400">
  {leads.length} </h2> 
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
        </div>

      </div>

      <div className="grid grid-cols-12 gap-6 mt-8">

        <div className="col-span-3 bg-[#0F1F35] rounded-2xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Recent Activity
          </h2>

          <p className="text-slate-300">
            No activity yet
          </p>

        </div>

        <div className="col-span-6 bg-[#0F1F35] rounded-2xl p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Lead Manager
            </h2>

            <button
  className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold"
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

          <div className="space-y-4">

            <div>
              <strong>Name:</strong> {leads[currentLead].name}
            </div>

            <div>
              <strong>Age:</strong> {leads[currentLead].age}
            </div>

            <div>
              <strong>Phone:</strong> {leads[currentLead].phone}
            </div>

            <div>
              <strong>Email:</strong> {leads[currentLead].email}
            </div>

            <div>
              <strong>State:</strong> {leads[currentLead].state}
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

          <div className="flex gap-4 mt-4">

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