import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const count = useSelector((state) => state.main.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>Il valore di count in Redux è: {count}</p>
      <Button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: 3,
          })
        }
      >
        INCREMENTA
      </Button>
    </>
  );
}

export default App;
