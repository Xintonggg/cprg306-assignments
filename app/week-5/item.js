import ItemList from "./item-list"


export default function Item({name, quantity, category,}){

    
    return(
        <div className="text-white bg-pink-300 border border-yellow-400 m-10 p-5 w-96">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-lg">Buy {quantity} in {category}</p>
        </div>
           
    )
}