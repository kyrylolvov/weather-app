import React from 'react';

import { ReactComponent as Sunny } from '../../assets/img/large/01.svg';
import { ReactComponent as SunnyClouds } from '../../assets/img/large/02.svg';
import { ReactComponent as Clouds } from '../../assets/img/large/03.svg';
import { ReactComponent as BrokenClouds } from '../../assets/img/large/04.svg';
import { ReactComponent as Rain } from '../../assets/img/large/10.svg';
import { ReactComponent as Thunder } from '../../assets/img/large/11.svg';
import { ReactComponent as Snow } from '../../assets/img/large/13.svg';
import { ReactComponent as Mist } from '../../assets/img/large/50.svg';

const getWeatherIcon = (weatherId: string) => {
  switch (weatherId) {
    case '01':
      return <Sunny />;
    case '02':
      return <SunnyClouds />;
    case '03':
      return <Clouds />;
    case '04':
      return <BrokenClouds />;
    case '10':
      return <Rain />;
    case '11':
      return <Thunder />;
    case '13':
      return <Snow />;
    case '50':
      return <Mist />;
    default:
      return <Sunny />;
  }
};

export default getWeatherIcon;
