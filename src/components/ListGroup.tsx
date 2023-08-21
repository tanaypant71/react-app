function ListGroup() {
  let listGroupItems = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
  ];

  listGroupItems = [];

  return (
    <>
      <h1>List</h1>
      {/* with braces we can render anything dynamically */}
      {listGroupItems.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {listGroupItems.map((listGroupItems) => (
          <li key={listGroupItems}>{listGroupItems}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
