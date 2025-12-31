export default function InputCheckbox({ checked, onChange }) {
    return (
        <input 
            type="checkbox" 
            checked={checked} 
            onChange={onChange} 
            className="form-checkbox h-5 w-5 text-blue-600"
        />
    )
}