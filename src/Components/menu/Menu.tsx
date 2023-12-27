import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem?.url} className="listItem" key={listItem?.id}>
              {listItem.icon === "logo.svg" ? (
                <img src={`/${listItem?.icon}`} alt="Logo" className="logo" />
              ) : (
                <img src={`/${listItem?.icon}`} alt="" />
              )}
              <span className="listItemTitle">{listItem?.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
