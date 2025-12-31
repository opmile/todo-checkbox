import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleTask }) {
    return (
        <div className="flex flex-col gap-3">
            {tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3">
                    <TaskItem task={task} onToggle={onToggleTask} />
                </div>
            ))}
        </div>
    )
}