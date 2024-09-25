import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Import for CV files
import pdf from "../../Assets/../Assets/CV_eng_v2.pdf";
//
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      id="CV"
      style={{
        overflow: "scroll",
        padding: "2px",
        margin: "auto",
      }}
    >
      <Container fluid className="resume-section" id="resumeCV">
        <Row className="resume">
          <h1 className="project-heading">
            {" "}
            My <span className="orange">CV</span>
          </h1>
          <Document
            file={pdf}
            className="d-flex justify-content-center pl-2 pr-2"
          >
            <Page pageNumber={1} scale={width > 767 ? 0.75 : 0.45} />
            <Page pageNumber={2} scale={width > 767 ? 0.75 : 0.45} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
