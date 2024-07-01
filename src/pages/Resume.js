import React from "react";
// updated resume can be found here: (change file path to update file )
import myResume from "../images/generalImages/tranviviana.pdf"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {
    //in the future, edit so that links in the resume are clickable
    return (
        <div className='resume'>
            <h2>Experience In A Glance</h2>
            <Document
            file={myResume}
            onLoadError={console.error}
            style={{ width: '100vw', height: 'auto'}}
            >
              <Page pageIndex={0}/>
            </Document>
        </div>
    )
}