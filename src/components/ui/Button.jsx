export default function Button({ children, onClick, className="" }) {
    const baseClasses = "px-4 py-2 bg-blue-500 text-white font-bold rounded-4xl hover:bg-blue-600 transition-colors duration-700 shadow-md cursor-pointer";

    return (
        <button 
            className={`${baseClasses} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}