import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

export const EnhancedTableToolbar = ({ data }) => {
  const { filterOptions } = data;
  const classes = useToolbarStyles();
  const [selectHidden, setSelectHidden] = useState(false);

  const clickedFilterList = () => {
    setSelectHidden(!selectHidden);
  };

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography className={classes.filter} variant="h6" id="tableTitle" component="div">
        {selectHidden ? (
          <>
            <label className={classes.filterLabel}>Filter:</label>
            <Select
              classNamePrefix="select"
              className={classes.filterSelect}
              name="color"
              options={filterOptions}
              onChange={e => selectOption(e, data)}
            />
          </>
        ) : null}
      </Typography>
      <IconButton aria-label="filter list" onClick={clickedFilterList}>
        <FilterListIcon />
      </IconButton>
    </Toolbar>
  );
};

export function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id} align="center" sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export const filterRows = (rows, e) => {
  return rows.filter(row => {
    if (row.state) {
      if (e !== true) return row.state === e;
      else return true;
    } else if (row.nameWithOwner) {
      const privacy = row.isPrivate ? 'PRIVATE' : 'PUBLIC';
      if (e !== true) return privacy === e;
      else return true;
    } else return true;
  });
};

const selectOption = (e, data) => {
  const { rows, setFilteredRows } = data;
  const filteredRows = filterRows(rows, e.value);
  setFilteredRows(filteredRows);
};

export function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

export function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  filter: {
    flex: '1 1 100%',
    display: 'flex',
    'justify-content': 'flex-end'
  },
  filterLabel: {
    'align-self': 'center'
  },
  filterSelect: {
    width: '250px',
    'margin-left': '5px'
  }
}));

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired
};
