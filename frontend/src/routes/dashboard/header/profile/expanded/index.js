import style from "./style.css";

const MenuItem = (props) => {
  return <li class={style.menu_item}>{ props.name }</li>
}

const Expanded = () => {
  const items = [
    { name: "Profile", link: ""},
    { name: "Settings", link: ""}
  ];
  return <div class={style.expanded}>
    <li class={style.identity}>kane.petra@looplang.org</li>

    { items.map(item => {
      return ( <MenuItem key={item.name} name={item.name} /> )
    })}
  </div>
}

export default Expanded;