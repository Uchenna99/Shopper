

interface Props {
    title: string;
}

const InputText = ({ title }:Props) => {
  return (
    <div className="w-full flex flex-col gap-2">

        <p className="text-black-text text-xs font-monts-medium">
            {title}
        </p>


        <input type="text" 
            className="w-full h-9 min-h-9"
        />
    </div>
  )
}

export default InputText;