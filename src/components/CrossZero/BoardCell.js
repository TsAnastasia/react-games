const BoardCell = (props) => {
  const handleClick = () =>{
    const i = props.row * 3 + props.column;
    props.onClick(i);
  }

  return (
    <button 
      type="button"
      className="board__cell" 
      onClick={handleClick}>
      {props.squares[props.row * 3 + props.column]}
    </button>
  );
};

export default BoardCell;