export function Categories({ category, setCategory }) {
  return (
    <div className="p-4 bg-gray-300 shadow-md flex justify-between items-center">
      <div className="inline-flex gap-4">
        {category.map((item) => {
          return (
            <button key={item} onClick={() => {
              const newCategory = category.filter((e) => {
                return e != item
              }, 1)
              setCategory(newCategory)
            }} className="flex items-center bg-gray-200 shadow-md">
              <p className="p-1">{item}</p>
              <span className="bg-gray-400 px-2 h-full flex">
                <img
                  className="self-center"
                  src="/images/icon-remove.svg"
                  alt="remove"
                />
              </span>
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={(e) => setCategory([])} className="font-bold">
          Clear
        </button>
      </div>
    </div>
  );
}
