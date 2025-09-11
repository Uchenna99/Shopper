import { useAppContext } from "../../hooks/AppContext";
import CategoryOption from "./CategoryOption";


const CategoriesDropdown = () => {
  const {  } = useAppContext();


  return (
    <div className="w-[690px] bg-white py-10 px-5 shadow-sm rounded-md absolute top-7
      grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5"
      >
        
      <CategoryOption title="Men's Clothing" amount={20}/>

      <CategoryOption title="Women's Clothing" amount={25}/>

      <CategoryOption title="Children's Clothing" amount={10}/>

      <CategoryOption title="Accessories" amount={1}/>
      

    </div>
  )
}

export default CategoriesDropdown;