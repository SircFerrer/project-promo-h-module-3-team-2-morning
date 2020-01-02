import React from "react";
import "../../stylesheets/Sass-components/Icons.scss";

function Icons(props) {
  console.log(props);

  return (
    <footer className="card__social">
      {props.icons.map((icon, index) => {
        return (
          <a key={index} className="card__icon js-card__icon js-card__icon--phone js-icon-deactivated" target="_blank" title={icon.title} href={icon.prefix + props.formData.phone}>
            <i className={icon.i}></i>
          </a>
        );
      })}
    </footer>
  );
}

export default Icons;
