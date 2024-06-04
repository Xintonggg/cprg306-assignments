import ItemList from "./item-list"


export default function Item({name, quantity, category}){

    
    return(
        <div className="text-white bg-pink-400 border border-cyan-100 m-10 p-10">
            <h3 className="text_lg">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </div>
           
    )
}