export default function Container({ children }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {children}
    </div>
  )
}