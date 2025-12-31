import Button from "./ui/Button"

export default function Toolbar({ onClick }) {
  return (
    <div className="flex justify-center items-center">
        <Button 
            onClick={onClick}
            className="w-full"
        >
            Create New Task
        </Button>
    </div>
  )
}
