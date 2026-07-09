export const DOCUMENT_BUCKET="project-documents";
export function safeStoragePath(projectName:string,fileName:string){const p=(projectName||"unassigned").replace(/[^a-zA-Z0-9_-]/g,"_");const f=fileName.replace(/[^a-zA-Z0-9._-]/g,"_");return `${p}/${Date.now()}_${f}`}
