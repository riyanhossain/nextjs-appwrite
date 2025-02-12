"use client";

import { useState, FormEvent } from "react";
import { createNewTodo } from "@/app/actions";

import React from "react";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    // Clear any previous error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input
    if (!todo.trim()) {
      setError("Please enter a todo item");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const res = await createNewTodo(todo);

      if (res?.success) {
        setTodo(""); // Clear input only on success
        console.log(res.message);
      } else {
        // Handle unsuccessful response
        setError(res?.message || "Failed to create todo");
      }
    } catch (err) {
      // Handle any unexpected errors
      setError("Something went wrong. Please try again.");
      console.error("Todo creation error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
      <div className="w-full">
        <input
          type="text"
          className={`w-full border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded p-2 text-black`}
          placeholder="Add a new todo"
          value={todo}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <button
        type="submit"
        className={`w-full lg:max-w-[120px] ${
          isSubmitting
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white p-2 rounded transition-colors`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
