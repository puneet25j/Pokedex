import StatBar from './StatBar';

import classes from './Stats.module.css';

function Stats(props) {
  return (
    <div className="charts">
      {props.stats.map((element) => (
        <StatBar
          key={element.stat.name}
          value={element.base_stat}
          label={element.stat.name}
        />
      ))}
    </div>
  );
}

export default Stats;
