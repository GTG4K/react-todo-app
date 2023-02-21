import './Filters.css';

const Filters = (props) => {
  const setAll = () => {
    props.onFilterBy('All');
  };
  const setActive = () => {
    props.onFilterBy('Active');
  };
  const setCompleted = () => {
    props.onFilterBy('Completed');
  };

  return (
    <div className="filters-container">
      <h3 className={props.filter === 'All' && 'active'} onClick={setAll}>
        All
      </h3>
      <h3 className={props.filter === 'Active' && 'active'} onClick={setActive}>
        Active
      </h3>
      <h3 className={props.filter === 'Completed' && 'active'} onClick={setCompleted}>
        Completed
      </h3>
    </div>
  );
};
export default Filters;
