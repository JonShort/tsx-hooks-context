import * as React from "react";

import { BigButton } from "./BigButton";
import { InteractiveBigButton } from "./InteractiveBigButton";

interface IStatefulButtons {
  increment: number;
  onClicks: (number) => void;
}

const StatefulButtons: React.FC<IStatefulButtons> = ({
  increment,
  onClicks
}) => {
  const [Aclicks, setAclicks] = React.useState(0);
  const [Bclicks, setBclicks] = React.useState(0);

  React.useEffect(() => {
    const numberOfClicks = (Aclicks + Bclicks) / increment;

    return onClicks(numberOfClicks);
  });

  const resetCounters = () => {
    setAclicks(0);
    setBclicks(0);
  };

  return (
    <React.Fragment>
      <InteractiveBigButton
        clicks={Aclicks}
        onClick={() => setAclicks(Aclicks + increment)}
      >
        {Aclicks}
      </InteractiveBigButton>
      <InteractiveBigButton
        clicks={Bclicks}
        onClick={() => setBclicks(Bclicks + increment)}
      >
        {Bclicks}
      </InteractiveBigButton>
      <BigButton onClick={resetCounters}>Reset</BigButton>
    </React.Fragment>
  );
};

export { StatefulButtons };
