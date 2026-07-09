'use client';
import {useState} from 'react';

export default function ProjectBrainBox(){
  const [answer,setAnswer]=useState<any>(null);
  async function submit(e:any){
    e.preventDefault();
    const payload=Object.fromEntries(new FormData(e.currentTarget).entries());
    const res=await fetch("/api/project-brain/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
    setAnswer(await res.json());
  }
  return <form className="card" onSubmit={submit}>
    <h2>Ask Project Brain</h2>
    <label>Project<select name="project_name"><option>Wylie</option><option>Galaxy</option><option>Waller Creek</option></select></label>
    <label>Question<input name="question" placeholder="What is blocking startup? Why is item 0063 on hold?"/></label>
    <button type="submit">Ask</button>
    {answer && <pre>{JSON.stringify(answer,null,2)}</pre>}
  </form>
}
