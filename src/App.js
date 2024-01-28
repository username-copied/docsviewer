// import logo from './logo.svg';
import DocxViewer from './components/DocxViewer';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import './App.css';

function App() {

  const docs = [
    // { uri: "https://url-to-my-pdf.pdf" }, // Remote file
    { uri: require("./files/docsx.docx") }, // Local File
  ];

  return <>
    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    <DocxViewer/>
    </>;

}

export default App;
