import { h } from 'preact';
import Header from './header';
import Rules from './rules';
import style from './style.css';

const Dashboard = () => (
	<div class={style.dashboard_container}>
    <div class={style.dashboard}>
		  <Header />

      <div class={style.divider} />

      <Rules />
    </div>
	</div>
);

export default Dashboard;
