const Statistics = (props) => {
    {console.log(props.all)}
    {if (props.all == 0){
        return(
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }}
  return (
    <div>
      <h1>statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>All: {props.good + props.neutral + props.bad}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.percentage} %</p>
    </div>
  );
};

export default Statistics;
