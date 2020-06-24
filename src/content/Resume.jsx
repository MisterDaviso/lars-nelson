import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import myResume from '../files/LarsNelsonResume.pdf'
 
class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
        file="/Users/larsnelson/Personal_Works/portfolio/portfolio-v2/src/files/LarsNelsonResume.pdf"
        onLoadSuccess={this.onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default Resume