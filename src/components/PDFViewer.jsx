import React from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ fileUrl }) => {
  return (
    <Document file={fileUrl}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PdfViewer;
