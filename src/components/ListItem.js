const ListItem = ({ text, rate, onClick }) => {
  return (
    <div>
      <li onClick={onClick}>{`${text} , ${rate}`}</li>
    </div>
  );
};

export default ListItem;
