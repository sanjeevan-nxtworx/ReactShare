function DisplayItemList({ ListItems, HandleSelect }) {
  function HandleSelectItem(id) {
    console.log("IN HANDLE SELECT");
    HandleSelect(id);
  }

  return ListItems.map((item, index) => {
    return (
      <div key={item.ID} onClick={() => HandleSelectItem(item.ID)}>
        <span>{item.ID}</span>
        <span>{item.Name}</span>
      </div>
    );
  });
}

export default DisplayItemList;
