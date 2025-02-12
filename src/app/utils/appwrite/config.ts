import { env } from "@/env";
import { Client, Databases } from "appwrite";

const client = new Client().setProject(env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const db = new Databases(client);
