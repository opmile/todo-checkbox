import InputText from './InputText';
import Button from './Button';

export default function Form({ onSubmit }) {
    return (
        <form 
            className="flex flex-col gap-4"
            onSubmit={onSubmit}
        >
            <InputText 
                type="text" 
                name="taskDescription"  
                required 
            />
            <Button type="submit" className='self-center w-2/5'>
                add task
            </Button>
        </form>
    );
}