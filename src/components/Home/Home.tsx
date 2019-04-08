import React, { useEffect, useRef } from 'react';
import css from './Home.scss';
// import MainFX from "./components/MainFX/MainFX"
import ThreeCanvas from "./components/ThreeCanvas/ThreeCanvas"

interface Props {}

const useAnimation = () => {
  const wrapRef = useRef<HTMLDivElement>();
  const hmnsRef = useRef<HTMLDivElement>();
  const hmnsxRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const hmnsTimeout = setTimeout(() => {
      hmnsRef.current.classList.add(css.active);
      wrapRef.current.classList.add(css.active);
    }, 1400);
    const hmnsxTimeout = setTimeout(() => {
      hmnsxRef.current.classList.add(css.active);
    }, 2200);
    return () => {
      clearTimeout(hmnsTimeout);
      clearTimeout(hmnsxTimeout);
    };
  }, []);
  return {
    wrapRef,
    hmnsRef,
    hmnsxRef,
  };
}

const Home: React.FC<Props> = () => {
  const {wrapRef, hmnsRef, hmnsxRef} = useAnimation();
  return (
    <div ref={wrapRef} className={css.Home}>
      <div className={css.Fx}>
        <span ref={hmnsRef} className={css.Honmonos}>Honmonos</span>
      </div>
      <div className={css.Fx}>
        <span ref={hmnsxRef} className={css.HMNS_X}>HMNS_X</span>
      </div>
      <div className={css.Fx}>
        {/*<MainFX/>*/}
      </div>
      <div className={css.Fx}>
        {/*<ThreeCanvas/>*/}
      </div>
    </div>
  );
}

export default Home;
