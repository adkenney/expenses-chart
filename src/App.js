import expenseData from './data.json';
import { Fragment } from 'react';
import Card from './components/UI/Card';
import BalanceView from './components/BalanceView';
import ExpensesChart from './components/Chart/ExpensesChart';

function App() {
  return (
    <Fragment>
      <BalanceView />
      <Card>
        <h1>Spending - Last 7 Days</h1>
        <ExpensesChart data={expenseData} />
        <hr />
        <div className="bottom-info">
          <div>
            <p>total this month</p>
            <h2>$478.33</h2>
          </div>
          <div>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}

export default App;
