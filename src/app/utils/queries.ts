import { db } from "@/app/utils/appwrite/config";
import { env } from "@/env";
import { Query } from "appwrite";

export const getTodos = async () => {
  try {
    const res = await db.listDocuments(
      env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      "todos",
      [Query.orderDesc("$createdAt")]
    );

    return {
      success: true,
      data: res.documents,
    };
  } catch (error) {
    console.error(error);
  }
};
