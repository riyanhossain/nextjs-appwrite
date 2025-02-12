import { getTodos } from "@/app/utils/queries";
import DeleteButton from "./delete-button";

export default async function TodoList() {
  const res = await getTodos();

  if (!res) return <p>Loading...</p>;

  if (!res.success) return <p>Failed to load todos</p>;

  return (
    <ul className="space-y-4">
      {res.data.map((todo) => (
        <li
          key={todo.$id}
          className="flex justify-between items-center gap-x-2 bg-gray-800 rounded"
        >
          <p className="flex-1 pl-1">{todo.text}</p>

          <DeleteButton id={todo.$id} />
        </li>
      ))}
    </ul>
  );
}
