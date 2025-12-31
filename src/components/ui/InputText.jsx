export default function InputText({ ...props }) {
    return (
        <input 
            type="text" 
            className="w-96 self-center px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
            placeholder="type your task here..."
            {...props}
        />
    )
}