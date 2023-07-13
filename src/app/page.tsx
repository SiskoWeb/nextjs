"use client";
import { useLogic } from "../hooks/edit";

export default function Comp() {
  const { handleDelete} = useLogic();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleDelete}>click to push</button>
    </main>
  );
}
