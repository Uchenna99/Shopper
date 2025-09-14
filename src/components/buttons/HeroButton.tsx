interface Props {
  title: string;
}

const HeroButton = ({title}:Props) => {
  return (
    <button className="w-fit border-none outline-none rounded-4xl bg-orange-500 text-nowrap text-lg text-white font-monts-medium px-7 py-3 
      transition-all duration-300 cursor-pointer hover:bg-orange-400 hover:shadow-md hover:scale-103
      active:bg-orange-400 active:scale-95">

        {title}
    </button>
  )
}

export default HeroButton;