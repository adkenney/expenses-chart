import expenseData from './data.json';
import Card from './components/UI/Card';
import BalanceView from './components/BalanceView';
import ExpensesChart from './components/Chart/ExpensesChart';

function App() {
  return (
    <div className="main-container">
      <BalanceView />
      <Card>
        <h1>Spending - Last 7 Days</h1>
        <ExpensesChart data={expenseData} />
        <hr />
        <div className="info-container">
          <div className="left-info">
            <p>Total this month</p>
            <p>$478.33</p>
          </div>
          <div className="right-info">
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
