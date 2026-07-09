'use client';
import {useState} from 'react';

export default function StartupTaskForm(){
  const [status,setStatus]=useState("Ready");
  async function submit(e:any){
    e.preventDefault();
    const payload=Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("Saving startup task...");
    const res=await fetch("/api/startup/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
    const data=await res.json();
    setStatus(res.ok ? `Saved: ${data.status}` : `Error: ${data.error || "failed"}`);
  }
  return <form className="card" onSubmit={submit}>
    <h2>Add Startup Task / Blocker</h2>
    <label>Project<select name="project_name"><option>Wylie</option><option>Galaxy</option><option>Waller Creek</option></select></label>
    <label>Equipment Item<input name="item_number" placeholder="2170, 0063, hood..." required /></label>
    <label>Task<input name="title" placeholder="Verify electrical, hood commissioning, ANSUL permit..." required /></label>
    <label>Discipline<select name="discipline"><option>Electrical</option><option>Plumbing</option><option>Gas</option><option>Fire Suppression</option><option>Refrigeration</option><option>Manufacturer Startup</option><option>GC Coordination</option></select></label>
    <label>Status<select name="status"><option>Blocked</option><option>Ready</option><option>Scheduled</option><option>Complete</option></select></label>
    <label>Blocker Notes<textarea name="blocker" placeholder="What is stopping startup?"/></label>
    <button type="submit">Save Startup Task</button>
    <p className="badge">{status}</p>
  </form>
}
