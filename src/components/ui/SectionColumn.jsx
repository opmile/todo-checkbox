import TaskList from "./TaskList";

export default function SectionColumn({ title, tasks, onToggleTask }) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <TaskList tasks={tasks} onToggleTask={onToggleTask} />            
        </div>
    )
}