export function Categories({ category, setCategory }) {
  return (
    <div className="p-4 bg-gray-300 shadow-md flex justify-between items-center">
      <div className="inline-flex shadow-md">
        <span className="flex items-center bg-gray-200">
          <p className="p-1">{category}</p>
          <button  className="bg-gray-400 px-2 h-full">
            <img src="./public/images/icon-remove.svg" alt="remove" />
          </button>
        </span>
      </div>
      <div>
        <button onClick={e => setCategory()} className="font-bold">Clear</button>
      </div>
    </div>
  );
}
