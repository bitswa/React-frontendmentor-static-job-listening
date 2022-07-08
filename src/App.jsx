import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Categories } from "./components/Categories";

import data from "./data.json";
import "./index.css";

export function App() {
  const [list, setList] = useState(data);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (category.length == 0) {
      return setList(data);
    }
    setList([]);

    data?.map((item) => {
      item?.languages.map((lang) => {
        category.map((cat) => {
          if (lang == cat) {
            setList((prev) => [...prev, item]);
          }
        });
      });
      item?.tools.map((tool) => {
        category.map((cat) => {
          if (tool == cat) {
            setList((prev) => [...prev, item]);
          }
        });
      });
    });
  }, [category]);

  useEffect(() => {
    console.log(list);
    console.log(category);
  }, [list]);

  return (
    <div>
      <header className="h-[25vh] bg-gray-100 bg-cover bg-header-mobile md:bg-header-desktop"></header>
      <div></div>
      <main className="px-8 py-4 bg-gray-200 h-[80vh] md:px-16">
        {category.length != 0 && (
          <Categories setCategory={setCategory} category={category} />
        )}
        {list?.map((obj) => {
          return (
            <Card data={obj} setList={setList} setCategory={setCategory} />
          );
        })}
      </main>
    </div>
  );
}
