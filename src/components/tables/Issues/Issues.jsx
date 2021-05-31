import React from 'react';
import IssuesTable from 'components/tables/Issues/IssuesTable';

export default function Issues(data) {
  let rows = rowsCreation(data?.data?.edges);

  let orderByStr = 'commentCount';
  const headCells = [
    { id: 'number', numeric: false, label: 'Number' },
    { id: 'title', numeric: true, label: 'Title' },
    { id: 'author', numeric: true, label: 'Author' },
    { id: 'commentCount', numeric: true, label: 'Comment Count' },
    { id: 'createdAt', numeric: true, label: 'Title ' },
    { id: 'state', numeric: true, label: 'state' }
  ];
  const options = [
    { label: 'Open', value: 'OPEN' },
    { label: 'Closed', value: 'CLOSED' },
    { label: 'All', value: true }
  ];

  return (
    <div className="issues-container">
      {rows && <IssuesTable rows={rows} orderByStr={orderByStr} headCells={headCells} filterOptions={options} />}
    </div>
  );
}

const rowsCreation = data => {
  return data?.map(({ node }) => {
    const { number, title, author, comments, createdAt, state } = node;
    return { number, title, author: author.login, commentCount: comments.totalCount, createdAt, state };
  });
};
