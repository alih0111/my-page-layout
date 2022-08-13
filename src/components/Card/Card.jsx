import {A} from 'hookrouter'
import "./style.css";

export default function Card({ variant,data }) {
  return (
    <div className={variant}>
      <A href={data.target} className="card">
        <div
          className="thumb"
          style={{ backgroundImage: `url(${data.background})` }}
        ></div>
        <article>
          <h1>{data.title}</h1>
          <span>{data.summary}</span>
        </article>
      </A>
    </div>
  );
}
