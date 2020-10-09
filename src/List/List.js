import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { UnorderedList } from "../UnorderedList/UnorderedList";
import styles from "./List.module.css";

export const List = withRouter(List_);

function List_({ pages, anchors, id, location }) {
  const [open, setOpen] = useState(false);

  const isCurrentPage = pages[id].url && location.pathname === `/${pages[id].url}`;

  const clickHandler = function (event) {
    event.preventDefault();
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <li className={styles.item}>
      <div style={{ background: isCurrentPage ? "#F0F0F0" : undefined }}>
        <Link
          to={pages[id].url}
          onClick={() => setOpen(true)}
          className="link"
          style={{
            fontWeight: isCurrentPage && !location.hash ? 700 : 400,
            paddingLeft: `${20 + pages[id].level * 20}px`,
          }}
        >
          {pages[id].pages && (
            <button
              onClick={clickHandler}
              className={open ? styles.opened : styles.closed}
              style={{ left: `${pages[id].level * 20}px` }}
              aria-label={open ? "Свернуть" : "Развернуть"}
            />
          )}
          {pages[id].title}
        </Link>
        {isCurrentPage && pages[id].anchors && (
          <UnorderedList
            pages={pages}
            anchors={anchors}
            id={id}
            type={"anchor"}
            location={location}
          />
        )}
      </div>
      {pages[id].pages && open && (
        <UnorderedList
          pages={pages}
          anchors={anchors}
          id={pages[id].pages}
          type={"url"}
          location={location}
        />
      )}
    </li>
  );
}
