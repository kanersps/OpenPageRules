import { h } from 'preact';
import style from "./style.css";
import "../../../../style/arrows.css";

const DomainSelector = () => {
  return <div class={style.domain_selector}>
    <span class={style.title}>Domain</span>
    <span class={style.current_domain}>
      <span class={style.current_domain_title}>looplang.org</span>
      <span className={`up arrow`} />
    </span>
  </div>
}

export default DomainSelector;