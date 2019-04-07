import React from 'react';
import css from './Home.scss';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <span className={css.Title}>HMNS_X</span>
    </div>
  );
}

export default Home;
