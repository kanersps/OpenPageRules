import Rule from "./rule";
import style from "./style.css";

const RuleTable = () => {
  return <div>
    <table class={style.table}>
      <thead>
        <th class={style.reorder} />
        <th class={style.priority}>Priority</th>
        <th class={style.match}>Match</th>
        <th class={style.target}>Target</th>
        <th class={style.enabled}>Enabled</th>
        <th class={style.actions} />
      </thead>
      <tbody>
        <Rule priority={1} match={`http://looplang.org*`} target={`http://localhost:8080`} enabled={true}   />
        <Rule priority={2} match={`https://looplang.org/hey`} target={`http://localhost:8080`} enabled={true} />
        <Rule priority={3} match={`https://looplang.org/protected`} target={`http://localhost:8080`} enabled={false} />
        <Rule priority={4} match={`https://looplang.org/protected`} target={`http://localhost:8080`} enabled={true} />
      </tbody>
    </table>
  </div>
}

export default RuleTable;