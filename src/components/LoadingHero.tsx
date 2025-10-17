

const LoadingHero = () => {
  return (
    <div className="relative w-full h-[300px] flex justify-center overflow-hidden">

      <div className="w-[1300px] h-full max-w-full bg-gray-200"></div>

      {/* shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />

    </div>
  );
};

export default LoadingHero;
