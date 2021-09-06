import ListItem from "./ListItem";

const List = ({ items, onClick }) => {
  const listItems = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        text={item.text}
        rate={item.rate}
        onClick={() => onClick(item.id)}
      />
    );
  });
  return <ul>{listItems}</ul>;
};

export default List;
