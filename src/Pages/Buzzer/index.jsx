
import { useParams } from "react-router-dom";

export const BuzzerComponent = () => {

  let { key } = useParams();

  return (
    <div>Buzzer: { key }</div>
  );
};
