
interface Props {
    option: string;
    isSelected: boolean;
    select: ()=>void;
}

const CheckBox = ({ option, isSelected, select }:Props) => {

  return (
    <div className="flex items-center gap-2">

        <div className={`w-[14px] h-[14px] flex rounded-full border p-[2.5px] ${isSelected? 'border-green-500':'border-gray-300'}
            cursor-pointer`}
            onClick={select}>
            <div className={`w-full h-full rounded-full ${isSelected? 'bg-green-500':'bg-gray-300'}`}></div>
        </div>

        <p className="text-black-text font-monts-medium text-sm text-nowrap">
            {option}
        </p>
    </div>
  )
}

export default CheckBox;