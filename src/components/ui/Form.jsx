import InputText from './InputText';
import Button from './Button';

export default function Form({ onSubmit, onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const taskDescription = formData.get('taskDescription');
        onSubmit(taskDescription);

        event.target.reset();

        // Close the modal after submitting the form
        if (onClose) {
            onClose();
        }
    };
    
    return (
        <form 
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
        >
            <InputText  
                name="taskDescription"  
                required 
            />
            <Button type="submit" className='self-center w-2/5'>
                add task
            </Button>
        </form>
    );
}