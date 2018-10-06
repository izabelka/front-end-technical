A webpage that displays `json` data in a table with sortable columns


## How to run the app
1. Clone this repository
2. In the cloned repository directory run the command:
`npm install`
(if you don't have npm installed, [get npm](https://www.npmjs.com/get-npm))
3. Run the app:
`npm start`

---
If for some reason `npm start` did not work (there's a new [Create React App](https://github.com/facebookincubator/create-react-app) version, it
sometimes causes some issues), try adding:

```
SKIP_PREFLIGHT_CHECK=true
```

to the `.env` file (if there is no `.env` file, create it in the main directory.)

## About the app
- This App was created using [Create React App](https://github.com/facebookincubator/create-react-app).
- It displays a table from provided data.
- User can sort data by clicking on columns.
- User can also remove records from the table.
