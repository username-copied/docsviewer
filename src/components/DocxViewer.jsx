import React, { useState } from 'react';
import DocViewer,{DocViewerRenderers} from '@cyntler/react-doc-viewer';

const DocxViewer = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);
  console.log(selectedDocs);

  return (
    <>
      <input
        type="file"
        // accept=".doc"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />

      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </>
  );
};

export default DocxViewer;
