


const LoadingGrid = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">

        <div className="w-[1300px] max-w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-2 sm:gap-x-4 gap-y-5 py-10 px-2">

            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-3 bg-gray-200/40 p-3 rounded-xl animate-pulse"
                    >
                    <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                </div>
            ))}

        </div>

    </div>
  )
}

export default LoadingGrid;