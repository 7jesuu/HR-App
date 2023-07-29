import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthForm from '../components/authform/AuthForm';
import EmployeeForm from '../components/employeeform/EmployeeForm';
import EmployeeCard from '../components/employeecard/EmployeeCard';
import EmployeePage from '../components/employeepage/EmployeePage';
import AdminPanel from '../components/adminpanel/AdminPanel';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthForm} />
        <Route exact path="#" component={EmployeeForm} />
        <Route exact path="#" component={EmployeeCard} />
        <Route exact path="/card" component={EmployeePage} />
        <Route exact path="/adm" component={AdminPanel} />
      </Switch>
    </Router>
  );
};

export default App;
