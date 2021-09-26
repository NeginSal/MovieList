import ListItem from "./ListItem";

const List = ({ items, onClick, onClickDone }) => {
  const listItems = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        text={item.text}
        rate={item.rate}
        isDone={item.done}
        onClick={() => onClick(item.id)}
        onClickDone={() => onClickDone(item.id)}
      />
    );
  });
  return <ul>{listItems}</ul>;
};

export default List;
