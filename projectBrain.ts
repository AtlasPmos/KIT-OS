export function buildProjectBrainAnswer(input:any, context:any){
  const q=String(input.question||"").toLowerCase();
  const project=String(input.project_name||"");
  const equipment=context.equipment.filter((e:any)=>!project || e.project_name===project);
  const tasks=context.startupTasks.filter((t:any)=>!project || t.project_name===project);
  const docs=context.documents.filter((d:any)=>!project || d.project_name===project);
  const blocked=tasks.filter((t:any)=>String(t.status).toLowerCase().includes("blocked"));
  return {
    question: input.question,
    project,
    answer: blocked.length
      ? `${project || "Project"} has ${blocked.length} blocked startup item(s). Review the listed equipment and documents before scheduling startup.`
      : `${project || "Project"} has no blocked startup tasks in current KINTA data.`,
    evidence: { blockedTasks: blocked, relatedEquipment: equipment, relatedDocuments: docs },
    recommendedActions: blocked.map((t:any)=>`Resolve ${t.discipline} blocker for item ${t.item_number}: ${t.title}`)
  };
}
