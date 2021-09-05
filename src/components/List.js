import ListItem from "./ListItem";

const List = ({ items}) => {
  const listItems = items.map((item) => {
    return <ListItem key={item.id} text={item.text} rate={item.rate} />;
  });
  return <ul>{listItems}</ul>;
};

export default List;
