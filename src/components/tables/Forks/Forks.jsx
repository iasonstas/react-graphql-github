import React from 'react';
import ForksTable from 'components/tables/Forks/ForksTable';

export default function Forks(data) {
  let rows = rowsCreation(data?.data?.edges);
  let orderByStr = 'commentCount';
  const headCells = [
    { id: 'nameWithOwner', numeric: false, label: 'Name With Owner' },
    { id: 'description', numeric: true, label: 'description' },
    { id: 'starCount', numeric: true, label: 'Star Count' },
    { id: 'createdAt', numeric: true, label: 'Created At ' },
    { id: 'Private', numeric: true, label: 'Privacy' }
  ];

  const options = [
    { label: 'Public', value: 'PUBLIC' },
    { label: 'Private', value: 'PRIVATE' },
    { label: 'All', value: true }
  ];

  return (
    <div className="issues-container">
      {rows && <ForksTable rows={rows} orderByStr={orderByStr} headCells={headCells} filterOptions={options} />}
    </div>
  );
}

const rowsCreation = data => {
  return data?.map(({ node }) => {
    const { nameWithOwner, description, stargazerCount, createdAt, isPrivate } = node;
    return { nameWithOwner, description, stargazerCount, createdAt, isPrivate };
  });
};
