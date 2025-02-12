"use server";

import { revalidatePath } from "next/cache";
import { createTodo, deleteTodo } from "@/app/utils/mutations";

export async function createNewTodo(todo: string) {
  if (!todo.trim()) return null;

  const res = await createTodo(todo);

  revalidatePath("/");
  return res;
}

export const handleDelete = async (id: string) => {
  // Call the deleteTodo mutation with the id of the todo to delete
  const res = await deleteTodo(id);

  if (!res) return;

  revalidatePath("/");
};
