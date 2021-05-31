import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Input, makeStyles } from '@material-ui/core';
import Loader from 'common/loader/Loader';
import SimpleTabs from 'components/Tabs';
import { LOAD_DATA } from 'common/gql/loadDataGql';
import { ADD_STAR } from 'common/gql/addStarGql';

export default function Home() {
  let userData = { name: 'react', owner: 'facebook' };
  const [user, setUser] = useState(userData);
  const { data: queryData, loading: queryLoading } = useQuery(LOAD_DATA, {
    variables: user
  });
  const [addStar, { data: mutationData, loading: mutationLoading }] = useMutation(ADD_STAR);
  const [result, setResult] = useState({});
  const [id, setId] = useState(null);
  const classes = useStyles();
  const [star, setStar] = useState(false);

  useEffect(() => {
    if (!queryLoading) {
      setResult(queryData);
      setId(queryData?.repository?.id);
    }
    if (!mutationLoading) {
      setStar(mutationData?.addStar?.starrable?.viewerHasStarred);
    }
  }, [queryData, queryLoading, mutationData, mutationLoading, id]);

  const handleChange = e => {
    userData = { ...userData, [e.target.name]: e.target.value };
  };

  const onSubmit = e => {
    e.preventDefault();
    setUser(userData);
  };

  const starRepo = e => {
    if (id) {
      addStar({ variables: { repositoryId: `${id}` } });
    }
  };

  return (
    <main className="container-home">
      {!queryLoading ? (
        <>
          <form onSubmit={onSubmit} className={classes.formGit}>
            <Input placeholder="Git Owner" name="owner" type="text" onChange={handleChange} />
            <Input placeholder="Git Name" color="primary" name="name" type="text" onChange={handleChange} />
            <Button type="submit" variant="contained" color="inherit" onSubmit={onSubmit}>
              Search
            </Button>
            <Button color="secondary" variant="contained" onClick={starRepo}>
              {!star ? 'Star' : 'Starred'}
            </Button>
          </form>

          <SimpleTabs result={result} />
        </>
      ) : (
        <Loader show={queryLoading} />
      )}
    </main>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  formGit: {
    margin: '2rem',
    display: 'flex',
    justifyContent: 'space-around'
  },
  title: {
    flexGrow: 1
  },
  inputD: {
    backgroundColor: 'white',
    padding: '0.5rem',
    borderRadius: '4px'
  }
}));
