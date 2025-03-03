'use client'
import React, { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);


  return (
    <aside className={`bg-black text-white p-4 transition-all ${isOpen ? 'w-64' : 'w-16'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">Toggle</button>
      {isOpen && (
        <ul className="mt-4">
          <li>Technical Project Management</li>
          <li>Threadbuild</li>
          <li>Structure your pointers</li>
          <li>4SA Method</li>
        </ul>
      )}
    </aside>
  );
}


