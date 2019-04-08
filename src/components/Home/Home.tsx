import React, { useEffect, useState } from 'react';
import cc from 'classcat';
import css from './Home.scss';

interface Props {}

const useAnimation = () => {
  const [scene1, setScene1] = useState(false);
  const [scene2, setScene2] = useState(false);
  useEffect(() => {
    const hmnsTimeout = setTimeout(() => {
      setScene1(true);
    }, 1400);
    const hmnsxTimeout = setTimeout(() => {
      setScene2(true);
    }, 2200);
    return () => {
      clearTimeout(hmnsTimeout);
      clearTimeout(hmnsxTimeout);
    };
  }, []);
  return {
    scene1,
    scene2,
  };
}

const Home: React.FC<Props> = () => {
  const {scene1, scene2} = useAnimation();
  return (
    <div className={cc({
      [css.Home]: true,
      [css.Scene1]: scene1,
      [css.Scene2]: scene2,
    })}>
      <div className={css.Fx}>
        <span className={css.Honmonos}>
          Honmonos
        </span>
      </div>
      <div className={css.Fx}>
        <span className={css.HMNS_X}>
          HMNS_X
        </span>
      </div>
    </div>
  );
}

export default Home;
