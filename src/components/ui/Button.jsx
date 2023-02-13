import React from "react";

export default function Button({ text, onClick }) {
  return <button className="bg-slate-300 text-slate-600 py-2 px-4 rounded-sm hover:brightness-90" onClick={onClick}>{text}</button>;
}
