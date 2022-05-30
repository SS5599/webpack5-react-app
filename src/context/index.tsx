// 项目全局参数 共享

import React, { createContext, useState } from "react";

interface AppContextProps {
  loading: boolean;
  setLoading: (v: boolean) => void;
}

const defaultAppValues: AppContextProps = {
  loading: false,
  setLoading: () => {},
};

const AppContext = createContext(defaultAppValues);

const { Provider, Consumer } = AppContext;

const AppContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  return <Provider value={{ loading, setLoading }}>{children}</Provider>;
};

const AppContextSonsumer = (WarpperComponent:any) => {
    return (props:any) => {
        return <Consumer>
            {
                (values:AppContextProps) => <WarpperComponent {...props} {...values} />
            }
        </Consumer>
    }
}

export { AppContextProvider, AppContextSonsumer, AppContext };
