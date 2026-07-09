export default function DigitalKitchenCanvas({equipment}:{equipment:any[]}){
  const nodes = equipment.map((e,i)=>({
    ...e,
    x: e.x || 60 + (i%3)*210,
    y: e.y || 80 + Math.floor(i/3)*150,
    cls: String(e.status||"").toLowerCase().includes("blocked") || String(e.status||"").toLowerCase().includes("required") ? "blocked" : String(e.status||"").toLowerCase().includes("ready") ? "ready" : "review"
  }));
  return <div className="floor">
    {nodes.map(item=><a key={item.item_number} href={`/equipment/${item.item_number}`} className={`eqnode ${item.cls}`} style={{left:item.x,top:item.y}}>
      <strong>{item.item_number}</strong><br/>{item.name}<br/><small>{item.status}</small>
    </a>)}
  </div>
}
