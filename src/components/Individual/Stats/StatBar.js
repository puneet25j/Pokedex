import classes from './StatBar.module.scss';

const max = [
  { stat: 'hp', maxValue: 255 },
  { stat: 'attack', maxValue: 190 },
  { stat: 'defense', maxValue: 250 },
  { stat: 'special-attack', maxValue: 194 },
  { stat: 'special-defense', maxValue: 250 },
  { stat: 'speed', maxValue: 200 },
];

function StatBar(props) {
  let barFillHeight = '0%';

  const [{ maxValue }] = max.filter((e) => props.label === e.stat);

  barFillHeight = Math.round((props.value / maxValue) * 100) + '%';

  return (
    <div className={classes.bar}>
      <div className={classes.label}>{props.label}</div>
      <div className={classes.inner}>
        <div className={classes.fill} style={{ width: barFillHeight }}></div>
      </div>
    </div>
  );
}

export default StatBar;
