import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [];

export default function App() {
  const [items, SetItems] = useState(initialItems);
  const numItems = items.length;

  const numPacked = items.reduce(function (acc, item) {
    return item.packed === true ? acc + 1 : acc;
  }, 0);

  function handlePacked(id) {
    SetItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleItems(item) {
    SetItems((items) => [...items, item]);
  }
  function handleDeleteitem(id) {
    SetItems((items) => items.filter((item) => id !== item.id));
  }
  function handleClearItems() {
    console.log("here");
    SetItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onhandleitem={handleItems} />
      <PackingList
        items={items}
        onDeleteitem={handleDeleteitem}
        onpackitem={handlePacked}
        onClearlist={handleClearItems}
      />
      <Stats numItems={numItems} numPacked={numPacked} items={items} />
    </div>
  );
}
