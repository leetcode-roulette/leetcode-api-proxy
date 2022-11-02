import { FC, PropsWithChildren, createContext, useContext, useState, useEffect } from "react";
import throttle from "lodash.throttle";

const getDeviceConfig = (width: number): string => {
  if(width < 720) {
    return 'xs'
  } else if(width >= 720 && width < 1024 ) {
    return 'sm'
  } else if(width >= 1024 && width < 1400) {
    return 'md'
  } else {
    return 'lg'
  }
}

const BreakpointContext = createContext<string>("lg");
const SetBreakpointContext = createContext<Function>(() => {});

export const useBreakpointContext = (): [string, Function] => {
	const state = useContext(BreakpointContext);
  const dispatch = useContext(SetBreakpointContext);
	return [state, dispatch];
};

const BreakpointProvider: FC<PropsWithChildren> = ({ children }) => {
  const [brkPnt, setBrkPnt] = useState<string>(() =>  getDeviceConfig(window.innerWidth));

  useEffect(() => {
		window.addEventListener('resize', throttle(function() {
		setBrkPnt(getDeviceConfig(window.innerWidth));
		}, 200))
	});

	return (
		<BreakpointContext.Provider value={brkPnt}>
			<SetBreakpointContext.Provider value={setBrkPnt}>{children}</SetBreakpointContext.Provider>
		</BreakpointContext.Provider>
	);
};

export default BreakpointProvider;
