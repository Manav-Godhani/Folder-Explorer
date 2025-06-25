import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [icon, setIcon] = useState(true);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 10 }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
            setIcon(!icon);
          }}
        >
          <span>📁 {explorer.name}</span>
          <span>{icon ? "▶️" : "🔽"}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            // return <span>{exp.name}</span>;
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>📄 {explorer.name}</span>
      </div>
    );
  }
}

export default Folder;
