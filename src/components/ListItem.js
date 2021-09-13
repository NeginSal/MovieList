const ListItem = ({ text, rate, onClick, isDone, onClickDone }) => {
  return (
    <div>
      <li onClick={onClick}>{`${text} , ${rate}`}</li>
      <button onClick={onClickDone}>{isDone ? "unDone" : "Done"}</button>
    </div>
  );
};

export default ListItem;
