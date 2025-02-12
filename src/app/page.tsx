import TodoList from "@/app/todo-list";
import TodoInput from "@/app/todo-input";

export default function Home() {
  return (
    <section className="max-w-2xl w-full mx-auto py-8 px-5 space-y-4">
      <h1 className="text-center text-2xl lg:text-5xl font-semibold">Todo</h1>

      <TodoInput />

      <TodoList />
    </section>
  );
}
