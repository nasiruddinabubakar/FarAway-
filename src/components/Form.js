import { useState } from "react";

export default function Form({ onhandleitem }) {
  const [Quantity, SetQuantity] = useState(1);
  const [Description, SetDiscription] = useState("");

  const arr = Array.from({ length: 20 }, (_, i) => i + 1);

  function handleItem(e) {
    e.preventDefault();

    if (!Description) return;

    const newitem = { Description, Quantity, packed: false, id: Date.now() };

    onhandleitem(newitem);
    SetDiscription("");
    SetQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleItem}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        value={Quantity}
        onChange={(e) => SetQuantity(Number(e.target.value))}
      >
        {arr.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type={"text"}
        placeholder="Add item"
        value={Description}
        onChange={(e) => SetDiscription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
