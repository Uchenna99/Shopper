


const LoadingCard = () => {
  return (
    <div
        className="flex flex-col gap-3 bg-gray-200/40 p-3 rounded-xl animate-pulse"
        >
        <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
    </div>
  )
}

export default LoadingCard;