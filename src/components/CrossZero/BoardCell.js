const BoardCell = (props) => {
  const handleClick = () =>{
    props.onClick(props.row, props.column);
  }

  return (
    <button 
      type="button"
      className={`board__cell ${props.isActive && "board__cell_active"}`} 
      onClick={handleClick}>
      {props.squares[props.row * 3 + props.column]}
    </button>
  );
};

export default BoardCell;