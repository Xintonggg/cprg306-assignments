export default function Item({ name, quantity, category, onSelect, isSelected }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className={`max-w-lg mx-auto p-4 rounded-lg cursor-pointer shadow-md transition 
        ${isSelected ? 'bg-yellow-300 scale-105' : 'bg-pink-300 hover:bg-yellow-200'}
      `}
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-700">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
