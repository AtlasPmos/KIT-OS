'use client';
import {useState} from 'react';

export default function FileUploadForm(){
  const [status,setStatus]=useState("Ready");
  async function submit(e:any){
    e.preventDefault();
    setStatus("Uploading...");
    const formData=new FormData(e.currentTarget);
    const res=await fetch("/api/documents/upload",{method:"POST",body:formData});
    const data=await res.json();
    setStatus(res.ok ? `Uploaded: ${data.status}` : `Error: ${data.error || "upload failed"}`);
  }
  return <form className="card" onSubmit={submit}>
    <h2>Upload Project Document</h2>
    <label>Project<select name="project_name"><option>Wylie</option><option>Galaxy</option><option>Waller Creek</option></select></label>
    <label>Document Type<select name="document_type"><option>Drawing</option><option>Equipment Schedule</option><option>Manual</option><option>Permit / AHJ Comment</option><option>Startup Form</option><option>Warranty</option><option>Photo</option></select></label>
    <label>Linked Equipment Item<input name="linked_equipment_item" placeholder="2170, 0063, etc."/></label>
    <label>Notes<textarea name="notes" placeholder="What should KINTA review?"/></label>
    <label>File<input type="file" name="file" required /></label>
    <button type="submit">Upload + Create AI Review</button>
    <p className="badge">{status}</p>
  </form>
}
