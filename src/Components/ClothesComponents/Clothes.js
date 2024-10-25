
import { useSelector } from "react-redux";
import dataClothes from "../../Data/DataClothes";
import Cloth from "./Cloth";
import { getSelectedCategory } from "../../redux/clothesSlice";

const Clothes = () => {
    const selectedCategory = useSelector(getSelectedCategory) ;

    return(
        <div className="products">
            {dataClothes
            .filter(cloth =>  {
                if (selectedCategory === "All Categories") return true;
                return selectedCategory === cloth.category;
            })
            .map(cloth => <Cloth key={cloth.id} cloth={cloth}/>)}
       </div>   
)
}
export default Clothes;