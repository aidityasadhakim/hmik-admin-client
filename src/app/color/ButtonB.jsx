import { useThemeContext } from "./ContextExample";

const ButtonB = () => {
  const { state, dispatch } = useThemeContext();
  return (
    <div>
      <button onClick={() => dispatch({ type: "toggleHeader" })}>
        value is : {state.isShowing ? "show" : "hide"}
      </button>
    </div>
  );
};

export default ButtonB;
