import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Categories } from "./components/Categories";

import data from "./data.json";
import "./index.css";

export function App() {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (category.length == 0) {
      return setList(data);
    }

    const filterList = (lang) => {
      const newList = list.filter((item) => {
        if (item.languages.includes(lang) || item.tools.includes(lang)) {
          return true;
        }
      });
      setList(newList);
    };

    category.map((lang) => filterList(lang));
  }, [category]);

  return (
    <div>
      <header className="h-[25vh] bg-gray-100 bg-cover bg-header-mobile md:bg-header-desktop"></header>
      <div></div>
      <main className="px-8 py-4 bg-gray-200 h-[80vh] md:px-16">
        {category.length != 0 && (
          <Categories setCategory={setCategory} category={category} />
        )}
        {list?.map((obj) => {
          return <Card key={obj.id} data={obj} setCategory={setCategory} />;
        })}
      </main>
    </div>
  );
}
