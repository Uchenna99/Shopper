

interface Props {
    title: string;
    placeHolder: string;
    required?: boolean;
    onChangeValue: (value: string)=>void;
}

const InputText = ({ title, required, placeHolder, onChangeValue }:Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-1">

        <p className="text-black-text text-xs font-monts-medium">
            {title} {required && '*'}
        </p>


        <input type="text" 
            className="w-full h-9 min-h-9 border-none outline-none ring ring-gray-300 rounded-md px-3 text-black-text text-sm"
            placeholder={placeHolder}
            onChange={handleChange}
        />
    </div>
  )
}

export default InputText;