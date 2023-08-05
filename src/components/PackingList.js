import { useState } from "react";
import Items from "./Items";

export default function PackingList({
  items,
  onDeleteitem,
  onpackitem,
  onClearlist,
}) {
  // onClearlist;
  const [Sortby, SetSortby] = useState("input");
  let sorteditems = items;

  if (Sortby === "input") sorteditems = items;

  if (Sortby === "description") {
    sorteditems = items
      .slice()
      .sort((a, b) => a.Description.localeCompare(b.Description));
  }
  if (Sortby === "packed") {
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Items
            item={item}
            onDeleteitem={onDeleteitem}
            onpackitem={onpackitem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={Sortby} onChange={(e) => SetSortby(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="description">Sort by Description</option>
        </select>
        <button onClick={onClearlist}>Clear list</button>
      </div>
    </div>
  );
}
