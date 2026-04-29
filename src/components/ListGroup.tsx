// PascalConvention as letras iniciais sao sempre em maiusculo
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <>
        <>
          <>📚</>
          <p>Biblioteca Digital</p>
        </>
        <p>MEC + Gutenberg</p>
      </>
      {/* se for verdadeiro retorna segundo valor se nao retorna falso */}
      {items.length === 0 && <p>No list found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
