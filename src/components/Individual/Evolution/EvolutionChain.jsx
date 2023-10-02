import React from 'react';
import { useEffect, useState } from 'react';

import Evolution from './Evolution';
import classes from './evolution.module.scss';

const Arrow = () => {
  return (
    <div className={classes.arrow}>
      <svg
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
      >
        <path
          id="XMLID_222_"
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
        />
      </svg>
    </div>
  );
}

function getEvolutionData(evoData, r) {
  let numberOfEvolutions = evoData.length;
  if (numberOfEvolutions === 0) {
    return;
  }
  if (numberOfEvolutions === 1) {
    const onlyEvolution = evoData[0];
    r.push(buildEvolutionObj(onlyEvolution.species));
    getEvolutionData(onlyEvolution.evolves_to, r);
    return;
  }

  const sameLevelEvolution = evoData.map((e) => {
    return buildEvolutionObj(e.species);
  });
  r.push(sameLevelEvolution);
  // TODO: calls for graph like evolutions
}

function buildEvolutionObj(r) {
  return {
    name: r.name,
    id: r.url.split('/').at(-2),
  };
}

function getEvoData(evoData) {
  const res = [buildEvolutionObj(evoData.species)];
  console.log('----', evoData);
  getEvolutionData(evoData.evolves_to, res);
  return res;
}

function EvolutionChain(props) {
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.url);
      const data = await response.json();
      const evoChain = getEvoData(data.chain);
      console.log('====', evoChain);
      setEvolutionChain(evoChain);
    };

    fetchData();
  }, [props.url]);

  return (
    <>
      <h2>Evolution Chain</h2>
      <div className={classes.container}>
        {evolutionChain.map((evolutions, i) => {
          if (Array.isArray(evolutions)) {
            return evolutions.map((x) => {
              const { id: id1, name: name1 } = x;
              return (
                <Evolution
                  key={id1}
                  id={id1}
                  name={name1}
                  className={classes.evolution}
                />
              );
            });
          }
          const { id, name } = evolutions;
          const isLast = i === evolutionChain.length - 1;
          return (
            <React.Fragment key={id}>
              <Evolution
                key={id}
                id={id}
                name={name}
                className={classes.evolution}
              />
              {!isLast && (
                <Arrow />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default EvolutionChain;
