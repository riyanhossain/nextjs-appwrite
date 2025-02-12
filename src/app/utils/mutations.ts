import { db } from "@/app/utils/appwrite/config";
import { env } from "@/env";
import { ID } from "appwrite";

export const createTodo = async (text: string) => {
  try {
    const res = await db.createDocument(
      env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      "todos",
      ID.unique(),
      {
        text,
      }
    );

    console.log(res);

    return {
      success: true,
      message: "Todo created successfully",
    };
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const res = await db.deleteDocument(env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, "todos", id);

    console.log(res);

    return {
      success: true,
      message: "Todo deleted successfully",
    };
  } catch (error) {
    console.error(error);
  }
};
