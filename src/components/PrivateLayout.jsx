import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CreatorSignature from "./CreatorSignature";
import "../css/siteLayout.css";

export default function PrivateLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-layout">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="site-main">
        <Navbar setOpen={setOpen} />
        <CreatorSignature />
        <main className="site-content">{children}</main>
      </div>
    </div>
  );
}
