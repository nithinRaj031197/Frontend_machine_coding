import { useState } from "react";
import "./App.css";
import Folder, { Explorer } from "./components/Folder";
import explorer from "./data/fileData";
import useTreeTraversal from "./hooks/useTreeTraversal";

function App() {
  const [explorerData, setExplorerData] = useState<Explorer>(explorer);
  const { insertNode, deleteNode } = useTreeTraversal();

  const handleInsertNode = (folderId: string, item: string, isFolder: boolean) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <>
      <div className="App">
        <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
      </div>
    </>
  );
}

export default App;
