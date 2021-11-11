import style from "./style.css";

const Rule = (props) => {
  return <tr>
  <td>
    <svg class={ style.reorder_button } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
    </svg>
  </td>
  <td>{ props.priority }</td>
  <td>{ props.match }</td>
  <td>{ props.target }</td>
  <td>
    <label class={style.switch}>
    <input checked={ props.enabled } toggl type="checkbox" />
      <span className={`${style.slider} ${style.round}`} />
    </label>
  </td>
  <td class={style.action}>
    <button class={style.action_button}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    </button>
    <button class={style.action_button}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </td>
</tr>
}

export default Rule;