
import { useParams } from "react-router-dom";

export function Display() {

  let { key } = useParams();

  return (
    <div>Display: { key }</div>
  );
}
