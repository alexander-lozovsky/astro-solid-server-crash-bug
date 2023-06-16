import { ParentComponent } from "solid-js";

export const Wrapper: ParentComponent = (props) => {
  return <div>{props.children}</div>;
};
