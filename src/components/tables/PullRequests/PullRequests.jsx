import React from 'react';
import PullRequestTable from 'components/tables/PullRequests/PullRequestTable';

export default function PullRequests(data) {
  let rows = rowsCreation(data?.data?.edges);
  let orderByStr = 'commentCount';
  const headCells = [
    { id: 'title', numeric: true, label: 'Title' },
    { id: 'author', numeric: true, label: 'Author' },
    { id: 'commentCount', numeric: true, label: 'Comment Count' },
    { id: 'createdAt', numeric: true, label: 'Title ' },
    { id: 'state', numeric: true, label: 'state' }
  ];

  const options = [
    { label: 'Open', value: 'OPEN' },
    { label: 'Closed', value: 'CLOSED' },
    { label: 'Merged', value: 'MERGED' }
  ];

  return (
    <div className="issues-container">
      {rows && <PullRequestTable rows={rows} orderByStr={orderByStr} headCells={headCells} filterOptions={options} />}
    </div>
  );
}

const rowsCreation = data => {
  return data?.map(({ node }) => {
    const { title, author, comments, createdAt, state } = node;
    return { title, author: author.login, commentCount: comments.totalCount, createdAt, state };
  });
};
