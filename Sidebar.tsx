const nav = [
  ["Dashboard", "/dashboard"],
  ["Projects", "/projects"],
  ["Equipment DNA", "/equipment"],
  ["Digital Kitchen", "/digital-kitchen"],
  ["Documents", "/documents"],
  ["AI Review", "/ai-review"],
  ["Startup", "/startup"],
  ["Warranty", "/warranty"],
  ["Reports", "/reports"],
  ["Settings", "/settings"]
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">KINTA-OS</div>
      <div className="subtitle">Kitchen Intelligence Operating System</div>
      <nav className="nav">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </aside>
  );
}
