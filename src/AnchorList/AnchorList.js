import React from "react";
import { Link, withRouter } from "react-router-dom";

export const AnchorList = withRouter(AnchorList_);

function AnchorList_({ pages, anchors, id, location, anchorId }) {
  return (
        <li>
          <Link
            to={`${anchors[anchorId].url}${anchors[anchorId].anchor}`}
            className="link"
            style={{
              fontWeight: anchors[anchorId].anchor === location.hash ? 700 : 400,
              paddingLeft: `${20 + pages[id].level * 20 + 20}px`,
            }}
          >
            {anchors[anchorId].title}
          </Link>
        </li>
  );
}
