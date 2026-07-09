export const fallbackProjects = [
  {id:"wylie",name:"Wylie",location:"Pittsburgh, PA",health_score:78,status:"Active",focus:"Startup readiness and hood commissioning"},
  {id:"galaxy",name:"Galaxy",location:"Hillsboro, OR",health_score:64,status:"Permit / ANSUL",focus:"ANSUL permit comments and AOR general conformance"}
];

export const fallbackEquipment = [
  {id:"2170",item_number:"2170",project_name:"Wylie",name:"Mega Top Prep Refrigerator",manufacturer:"Kintera / TriMark",model:"KS48 / KS48Z",area:"Cookline",power:"120V/1PH, NEMA 5-15P",status:"Blocked - MEP verification required",ai_notes:"Verify receptacle location before turnover.",x:80,y:120},
  {id:"2168",item_number:"2168",project_name:"Wylie",name:"Undercounter Freezer",manufacturer:"Kintera / TriMark",model:"KUC48F / KUC48FZ",area:"Cookline",power:"120V/1PH, NEMA 5-15P",status:"Ready / self-contained",ai_notes:"No remote refrigeration piping required.",x:260,y:120},
  {id:"0063",item_number:"0063",project_name:"Galaxy",name:"Combi Oven, Electric",manufacturer:"Alto-Shaam",model:"6-10E PRO",area:"Cookline",power:"208-240V/3PH",status:"Blocked - City requested suppression clarification",ai_notes:"Use for ANSUL permit clarification response.",x:80,y:300}
];

export const fallbackDocuments = [
  {id:"doc-1",project_name:"Galaxy",name:"City ANSUL Permit Review Comments",document_type:"Permit / AHJ Comment",status:"AI Review Required",linked_equipment_item:"0063"},
  {id:"doc-2",project_name:"Wylie",name:"Startup / Hood Commissioning Checklist",document_type:"Startup Form",status:"Pending",linked_equipment_item:"2170"}
];

export const fallbackAiReview = [
  {id:"air-1",project_name:"Galaxy",title:"AOR general conformance required",summary:"City asks for AOR notation for deferred ANSUL submittal.",status:"Open",action:"Request AOR general conformance review."},
  {id:"air-2",project_name:"Wylie",title:"Startup blocker review",summary:"Hood commissioning and MEP readiness need verification.",status:"Open",action:"Confirm checklist completion."}
];

export const fallbackStartupTasks = [
  {id:"st-1",project_name:"Wylie",item_number:"2170",title:"Verify electrical receptacle and MEP readiness",discipline:"Electrical",status:"Blocked",blocker:"Field verification required"},
  {id:"st-2",project_name:"Galaxy",item_number:"0063",title:"Resolve ANSUL permit comment for oven suppression",discipline:"Fire Suppression",status:"Blocked",blocker:"City requested clarification"},
  {id:"st-3",project_name:"Wylie",item_number:"2168",title:"Confirm self-contained freezer power",discipline:"Electrical",status:"Ready",blocker:""}
];
