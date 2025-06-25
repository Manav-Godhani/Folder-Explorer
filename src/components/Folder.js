import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [icon, setIcon] = useState(true);

  const [showInput, setshowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();

    setExpand(true);
    setshowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setshowInput({ ...showInput, visible: false });
    }
  };
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
          <span>
            <span>{icon ? "▶️" : "🔽"}</span> 📁 {explorer.name}
          </span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputcontainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onBlur={() => setshowInput({ ...showInput, visible: false })}
                onKeyDown={onAddFolder}
              />
            </div>
          )}
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
