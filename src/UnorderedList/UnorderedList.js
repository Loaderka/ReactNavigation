import React from "react";
import { AnchorList } from "../AnchorList/AnchorList";
import { List } from "../List/List";

export function UnorderedList({
  topLevel,
  pages,
  anchors,
  id,
  type,
  location,
}) {
  return (
    <ul>
      {type === "topLevel" &&
        topLevel.map((el) => (
          <List key={el} pages={pages} anchors={anchors} id={el} />
        ))}
      {type === "url" &&
        id.map((el) => (
          <List key={el} pages={pages} anchors={anchors} id={el} />
        ))}
      {type === "anchor" &&
        pages[id].anchors.map((anchorId) => (
          <AnchorList
            key={anchorId}
            pages={pages}
            anchors={anchors}
            id={id}
            location={location}
            anchorId={anchorId}
          />
        ))}
    </ul>
  );
}