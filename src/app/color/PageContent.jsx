"use client";
import { useThemeContext } from "./ContextExample";
import ButtonA from "./buttonA";
import ButtonB from "./buttonB";

const PageContent = () => {
  const { state, dispatch } = useThemeContext();
  return (
    <div>
      <p>Current color: {state.isShowing ? "true" : "false"}</p>
      <ButtonA />
      <ButtonB />
    </div>
  );
};

export default PageContent;
