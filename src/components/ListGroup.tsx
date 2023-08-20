function ListGroup() {
  const listGroupItems = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {listGroupItems.map((listGroupItems) => (
          <li key={listGroupItems}>{listGroupItems}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
