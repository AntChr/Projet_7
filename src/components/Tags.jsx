import React from "react";

const Tags = ({tags}) => {

    <div className="container__description__ticloctag__tag">
    <ul className="container__description__ticloctag__tag__list">
      {tags.map(tag =>             
        <li className="container__description__ticloctag__tag__list__elt">
            {tag}
        </li>)}
    </ul>
  </div>
}

export default Tags
