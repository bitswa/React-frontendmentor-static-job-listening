import { useState } from "react";
import { Card } from "./components/Card";
import "./index.css";
import data from "./data.json";
import { useEffect } from "react";
import { Categories } from "./components/Categories";

export function App() {
  const [list, setList] = useState(data);
  const [category, setCategory] = useState();

  useEffect(() => {
    if (category == undefined) {
      return setList(data);
    }
    setList([]);

    data?.map((item) => {
      item?.languages.map((lang) => {
        if (lang == category) {
          setList((prev) => [...prev, item]);
        }
      });
      item?.tools.map((tool) => {
        if (tool == category) {
          setList((prev) => [...prev, item]);
        }
      });
    });
  }, [category]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      <header className="h-[25vh] bg-gray-100 bg-cover bg-header-mobile md:bg-header-desktop"></header>
      <div></div>
      <main className="px-8 py-4 bg-gray-200 h-[80vh] md:px-16">
        {category && <Categories setCategory={setCategory} category={category} />}
        {list?.map((obj) => {
          return (
            <Card data={obj} setList={setList} setCategory={setCategory} />
          );
        })}
      </main>
    </div>
  );
}
