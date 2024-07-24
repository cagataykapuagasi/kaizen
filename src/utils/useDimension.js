import React from 'react';
import { Dimensions } from 'react-native';

const useScreenDimensions = () => {
  const [screenData, setScreenData] = React.useState(Dimensions.get('screen'));

  React.useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};

export default useScreenDimensions;
