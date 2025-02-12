"use client";

import React from "react";
import { handleDelete } from "@/app/actions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="w-full lg:max-w-[120px] bg-red-500 text-white p-2 rounded"
    >
      Delete
    </button>
  );
}
