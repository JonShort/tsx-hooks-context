import * as React from "react";

export const useWindowWidth = (initialWidth: number) => {
  const [width, setWidth] = React.useState(initialWidth);

  const handleResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [width];
};
