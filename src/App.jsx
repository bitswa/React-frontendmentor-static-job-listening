import { Card } from "./components/Card";
import './index.css'
import data from './data.json';

export function App() {
  return (
    <div>
      <header className="h-[25vh] bg-gray-100"></header>
      <main className="px-8 py-4 bg-gray-200 h-[80vh]">
        {
          data.map(obj => {
            return (
              <Card data={obj} />
            )
          })
        }
      </main>
    </div>
  );
}
