import { useState } from "react";

export const withToggler = (WrappedComponent) => {
  return (props) => {
    const [toggled, setToggled] = useState(false);

    const changeToggled = (toggleStatus) => {
      setToggled((prev) => {
        if (typeof toggleStatus === "boolean") return toggleStatus;

        return !prev;
      });
    };
    return (
      <WrappedComponent
        {...props}
        toggled={toggled}
        changeToggled={changeToggled}
      />
    );
  };
};
