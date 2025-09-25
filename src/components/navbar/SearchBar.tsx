import { Search, X } from "lucide-react";
import SearchResult from "../SearchResult";
import products from "../../assets/Data/Items.json";
import { useEffect, useState } from "react";

interface Props {
  searching: boolean;
  close: ()=>void;
}


const SearchBar = ({ searching, close }:Props) => {
  const [searchInput, setSearchInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [foundItems, setFoundItems] = useState<any[]>([]);


  useEffect(()=>{
    if(searchInput.length > 1) {
      if(!showResult){
        setShowResult(true);
      }
      const searchItems = products.filter((item)=> item.name.toLowerCase().includes(searchInput));
      setFoundItems(searchItems);
    }else{
      if(showResult){ setShowResult(false) }
    }
  },[searchInput]);

  return (
    <>
        <div className="w-full h-10 rounded-3xl ring-1 ring-black/20 flex items-center justify-center focus-within:ring-orange-300 
          transition-all duration-200 relative">

            <input type="text" 
              className={`w-full border-none outline-none pl-5 pr-10 text-black-text font-monts-medium
              ${searching? '':'hidden'}`}
              placeholder="Search items"
              value={searchInput}
              onChange={(e)=> setSearchInput(e.target.value)}
            />

            <Search
              size={18}
              color={'#2b2726'}
              className={`absolute right-[11px] z-90 transition-all duration-200 ${searching? '':''}`}
            />

            {
              searching &&
              <X
                size={18}
                color="#ffb86a"
                className="absolute -right-5 top-1"
                onClick={close}
              />
            }


            {
              showResult && searching &&
              <SearchResult
                result={foundItems}
                foundItems={foundItems.length >= 1}
              />
            }

        </div>
    </>
  )
}

export default SearchBar;