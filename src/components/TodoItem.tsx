import { Todo } from "../types/todo.type"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, isCompleted: boolean) => void
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 rounded-md p-2 border border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox" className="scale-125" checked={todo.isCompleted} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />

                <span className={todo.isCompleted ? "line-through text-gray-400" : ""}>{todo.name}</span>
            </label>
        </div>
    );
}