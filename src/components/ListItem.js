const ListItem = ({ text, rate }) => {
  return (
    <div>
      <li >{`${text} , ${rate}`}</li>
    </div>
  );
};

export default ListItem;
