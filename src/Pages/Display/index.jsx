
import { useParams } from "react-router-dom";

export const DisplayComponent = () => {

  let { key } = useParams();

  return (
    <div>Display: { key }</div>
  );
}
