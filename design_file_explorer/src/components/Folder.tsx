import { BaseSyntheticEvent, useState } from "react";
import { getIcon } from "../data/fileData";
import "./Folder";

interface ExplorerItems {
  id: string;
  name: string;
  isFolder: boolean;
  items: ExplorerItems[];
}

export type Explorer = {
  id: string;
  name: string;
  isFolder: boolean;
  items: ExplorerItems[];
};

type FolderProps = {
  explorer: Explorer;
  key?: string;
  handleInsertNode?: (folderId: string, item: string, isFolder: boolean) => void | undefined;
};

const Folder = ({ explorer, handleInsertNode }: FolderProps) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });
  const { id, name, isFolder, items } = explorer;

  const handleNewFolder = (e: BaseSyntheticEvent, isFolder: boolean) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const onAddFolder: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    console.log("handleInsertNode", handleInsertNode);
    const inputValue = (event.target as HTMLInputElement).value;
    if (event.key === "Enter" && inputValue && handleInsertNode) {
      handleInsertNode(explorer.id, inputValue, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  if (isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>
            {getIcon(isFolder)} {name}
          </span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div>
          {showInput.isVisible && (
            <div className="inputContainer">
              <span>{getIcon(showInput.isFolder)}</span>
              <input
                className="inputContainer__input"
                type="text"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              />
            </div>
          )}
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {items?.map((exp: Explorer) => {
            return <Folder key={exp.id} explorer={exp} handleInsertNode={handleInsertNode} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="file">
          {getIcon(isFolder)}
          {name}
        </div>
      </>
    );
  }
};

export default Folder;
