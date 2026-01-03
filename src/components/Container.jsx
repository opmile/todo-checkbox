export default function Container({ children }) {
    return (
        <div className="max-w-md mx-auto mt-15 p-6 bg-white rounded-lg shadow-lg font-primary transition-shadow hover:shadow-xl duration-500">
        {children}
        </div>
    )
}