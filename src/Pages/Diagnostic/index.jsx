
import { useParams } from "react-router-dom";

export const DiagnosticComponent = () => {

  let { key } = useParams();

  return (
    <div>Diagnostic: { key }</div>
  );
};
