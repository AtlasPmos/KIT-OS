const nav = [
  ["Dashboard", "/dashboard"],["Projects", "/projects"],["Equipment DNA", "/equipment"],
  ["Startup", "/startup"],["Digital Kitchen", "/digital-kitchen"],["Documents", "/documents"],
  ["AI Review", "/ai-review"],["Project Brain", "/project-brain"],["Warranty", "/warranty"],
  ["Reports", "/reports"],["Session", "/session"],["Login", "/login"]
];
export default function Sidebar(){return <aside className="sidebar"><div className="logo">KINTA-OS</div><div className="subtitle">Kitchen Intelligence Operating System</div><nav className="nav">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav></aside>}
