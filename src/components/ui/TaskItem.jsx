import InputCheckbox from "./InputCheckbox";

export default function TaskItem({ task, onToggle }) {
    const handleChange = () => {
        onToggle(task.id);
    };

    return (
        <div className="flex items-center gap-3">
            <InputCheckbox checked={task.completed} onChange={handleChange} />
            <span className={task.completed ? "line-through text-gray-500" : ""}>
                {task.title}
            </span>
        </div>
    )
}