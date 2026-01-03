export default function EmptyState({ message }) {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <p className="text-gray-500 italic">{message}</p>
        </div>
    )
}