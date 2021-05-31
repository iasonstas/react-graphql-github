import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Issues from 'components/tables/Issues/Issues';
import PullRequests from 'components/tables/PullRequests/PullRequests';
import Forks from 'components/tables/Forks/Forks';
import Languages from 'components/tables/Languages/Languages';

import { Link } from 'react-router-dom';

export default function SimpleTabs({ result }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // const cammelCaseToSentence = text => {
  //   const result = text.replace(/([A-Z])/g, ' $1');
  //   return result.charAt(0).toUpperCase() + result.slice(1);
  // };

  return result?.repository ? (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} aria-label="Tabs" color="primary" indicatorColor="primary" textColor="primary">
          <Tab
            label={`${result?.repository?.issues?.totalCount}\n Issues`}
            {...a11yProps(0)}
            className={classes.tabIndicator}
            component={Link}
            to="/issues"
          />
          <Tab
            label={`${result?.repository?.pullRequests?.totalCount}\n Pull Requests`}
            {...a11yProps(1)}
            className={classes.tabIndicator}
            component={Link}
            to="/pull-requests"
          />
          <Tab
            label={`${result?.repository?.forks?.totalCount}\n Forks`}
            {...a11yProps(2)}
            className={classes.tabIndicator}
            component={Link}
            to="/forks"
          />
          <Tab
            label={`${result?.repository?.languages?.totalCount}\n Languages`}
            {...a11yProps(3)}
            className={classes.tabIndicator}
            component={Link}
            to="/languages"
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Issues data={result?.repository?.issues} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PullRequests data={result?.repository?.pullRequests} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Forks data={result?.repository?.forks} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Languages data={result?.repository?.languages} />
      </TabPanel>
    </div>
  ) : (
    <div></div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

function TabPanel(props) {
  const { children, value, index, data, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabIndicator: {
    textTransform: 'capitalize',
    whiteSpace: 'pre-wrap'
  }
}));
