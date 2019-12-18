import React from 'react';

function EditExpensePage(props) {
  console.log(props);
  return <div>THis is the edit expense page
    Editing the expense with id of {props.match.params.id}

  </div>;
}

export default EditExpensePage;
