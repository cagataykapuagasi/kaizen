import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useContext,
} from 'react';
import { useColorScheme } from 'react-native';
import { ColorsProps, light, dark } from 'res/colors';

export type ITheme = 'light' | 'dark' | 'default';

const getColorSchema = (theme?: ITheme | null): ColorsProps => {
  const value = theme === 'light' ? light : dark;
  return value as ColorsProps;
};

interface CommonContextType {
  theme: ITheme;
  setTheme: Dispatch<SetStateAction<ITheme>>;
  changeTheme: (val: ITheme) => void;
  currentColors: ColorsProps;
}

//@ts-ignore
const CommonContext = createContext<CommonContextType>(null);

const useCommonContext = () => useContext(CommonContext);

const CommonProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ITheme>('default');
  const { setItem, getItem } = useAsyncStorage('@theme');
  const colorSchema = useColorScheme();
  const [currentColors, setCurrentColors] = useState(light);

  useEffect(() => {
    const init = async () => {
      const storedTheme = await getItem();
      if (storedTheme) {
        setTheme(storedTheme as ITheme);
      }
    };

    init();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const init = async () => {
      if (theme === 'default') {
        setCurrentColors(getColorSchema(colorSchema));
      } else {
        setCurrentColors(getColorSchema(theme));
      }
    };

    init();
  }, [colorSchema, theme]);

  const changeTheme = (val: ITheme) => {
    setItem(val);
    setTheme(val);
  };

  return (
    <CommonContext.Provider
      value={{
        theme,
        setTheme,
        changeTheme,
        currentColors,
      }}>
      {children}
    </CommonContext.Provider>
  );
};

export { CommonProvider, CommonContext, useCommonContext };
