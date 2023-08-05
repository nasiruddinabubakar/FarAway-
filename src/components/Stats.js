export default function Stats({ numItems, numPacked, items }) {
  return (
    <footer className="stats">
      <em>
        {items.length !== 0
          ? `You have ${numItems} items on your list. You have packed ${numPacked} ${
              (numPacked / numItems) * 100
            }%`
          : "Start Adding items"}
      </em>
    </footer>
  );
}
