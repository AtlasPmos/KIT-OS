'use client';
import {useState} from 'react';
export default function EquipmentEditForm({item}:{item:any}){
 const [status,setStatus]=useState("Ready");
 async function submit(e:any){e.preventDefault();const payload=Object.fromEntries(new FormData(e.currentTarget).entries());setStatus("Saving...");const res=await fetch(`/api/equipment/${item.item_number}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});setStatus(res.ok?"Saved":"Error");}
 return <form className="card" onSubmit={submit}><h2>Edit Equipment DNA</h2><label>Status<textarea name="status" defaultValue={item.status||""}/></label><label>AI Notes<textarea name="ai_notes" defaultValue={item.ai_notes||""}/></label><button>Save</button><p className="badge">{status}</p></form>
}
