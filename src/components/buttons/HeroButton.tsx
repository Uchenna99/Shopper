interface Props {
  title: string;
  whenClicked?: ()=>void;
}

const HeroButton = ({title, whenClicked}:Props) => {
  return (
    <button className="w-fit border-none outline-none rounded-4xl bg-gray-900 text-nowrap sm:text-lg text-white font-monts-medium px-7 py-3 
      transition-all duration-300 cursor-pointer hover:bg-gray-800 hover:shadow-md hover:scale-103
      active:bg-gray-800 active:scale-95"
      onClick={whenClicked}>

        {title}
    </button>
  )
}

export default HeroButton;