export default function Items({ item, onDeleteitem, onpackitem }) {
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => onpackitem(item.id)}
        value={item.packed}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.Quantity} {item.Description}
      </span>
      <button onClick={() => onDeleteitem(item.id)}>❌</button>
    </li>
  );
}
