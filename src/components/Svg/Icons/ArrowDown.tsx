import * as React from 'react'
import {SvgProps} from '../types'
import arrowsSvg from '../../../assets/img/two-opposite-up-and-down-arrows-side-by-side.svg'
import s from './ArrowDown.module.css'

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <div>
          <img className={s.arrows} src={arrowsSvg} alt="arrorsSvg"/>
      </div>
  );
};

export default Icon;
