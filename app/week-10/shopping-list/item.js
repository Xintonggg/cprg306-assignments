import ItemList from "./item-list"


export default function Item({name, quantity, category, onSelect, isSelected}){

    
    return(
        <li className={`p-2 m-4 bg-pink-300 max-w-sm cursor-pointer ${isSelected ? 'bg-pink-300' : 'hover:bg-yellow-200'}`}
        onClick={() => onSelect(name)}>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-lg">Buy {quantity} in {category}</p>
        
        </li>
    );
}