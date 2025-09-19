import { ChevronDown } from "lucide-react";



const SortSelector = () => {
  return (
    <div className="h-10 flex relative">
        <div className="h-full rounded-4xl ring-1 ring-gray-300 flex items-center gap-3 text-black-text pl-5 pr-4
            hover:ring-gray-400 cursor-pointer transition-all duration-200">
            <p className="text-sm font-monts-medium">
                Sort by
            </p>

            <ChevronDown
                size={15}
                className="mt-1"
            />
        </div>
    </div>
  )
}

export default SortSelector;