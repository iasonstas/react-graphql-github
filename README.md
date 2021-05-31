### npm install & npm start

### Obtain a github access token

Simply follow Github's instructions
for [creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

After copy paste your token in Access Token Input and click the Login

The page has 2 input fields. Once you fill in Access Token input it will have preset `facebook/react`

It is suggested that these values are also stored in localStorage for them to persist if the page is refreshed.

### Tabs

Categories of data presented will be arranged in a tab layout.
Tabs should have counters that implement default filters

Each tab should has associated routing

### Tab content

A table with following properties:

#### Issues

- Router: `/issues`
- Columns [number, title, author, commentCount, createdAt, state]
- Filter by state: [Open, Closed, All], defaults to Open
- Sort by: [commentCount, createdAt], default commendCount desc

#### Pull Requests

- Router: `/pull-requests`
- Columns [title, author, commentCount, createdAt, state]
- Filter by state: [Open, Closed, Merged], defaults to Open
- Sort by: [commentCount, createdAt], default commentCount desc

#### Forks

- Router: `/forks`
- Columns: [repoAndOwnerName, description, starCount, createdAt]
- Filter by Privacy: [Public, Private, All], defaults is Public
- Sort by: [starCount, createdAt], default starCount desc

#### All Tab Tables

Tables should implement

- Pagination
- Up to 20 results in the first request
- Button to toggle sorting between asc/desc
- Filter dropdown. A results count, should be shown above the table.
- The top level (tab) counts should not be effected by these filters.

### Language Chart

I have installed and used "react-chartjs-2" package for the chart.
You may use some charting lib like [chartjs](https://www.chartjs.org/samples/latest/charts/pie.html).
