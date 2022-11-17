import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./StrukturOrganisasi.css";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";
import IMPL from "./IMPL.png";

const StrukturOrganisasi = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
    border: 0px solid #05355d;
  `;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tree-container">
      <div className="tree-wrapper">
        <Tree
          nodePadding="0.1px"
          lineWidth="3px"
          lineColor="white"
          lineBorderRadius="10px"
          label={
            <StyledNode>
              <h1 className="h1-so">Struktur Organisasi BRIFIRST</h1>
              <div className="root-comp">
                <div className="main-title">
                  <p>PROJECT</p>
                  <p>MANAGER</p>
                </div>
                <div className="main-subtitle">
                  <p>SANDRA</p>
                  <p>CHALIK</p>
                </div>
              </div>
            </StyledNode>
          }
        >
          <TreeNode label={<div className="connecting-line"></div>}>
            <TreeNode
              label={
                <div className="stream-comp" onClick={handleShow}>
                  <div className="second-title" style={{ marginTop: "-10px" }}>
                    <p>PROJECT</p>
                    <p>DELIVERY</p>
                    <p>MANAGER</p>
                  </div>
                </div>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <StyledNode>
                <div className="co-comp">
                  <div className="second-title">
                    <p>FUNCTIONAL</p>
                    <p>CO-PROJECT</p>
                    <p>MANAGER</p>
                  </div>
                  <div className="second-subtitle">
                    <p>ROULI ERLYANA</p>
                    <p>AMBARITA</p>
                  </div>
                </div>
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title">
                    <p>BUSINESS</p>
                    <p>PROCESS</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title">
                    <p>GENERAL</p>
                    <p>LEDGER</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title" style={{ marginTop: "-10px" }}>
                    <p style={{ fontSize: "9px" }}>PROFITABILITY &</p>
                    <p style={{ fontSize: "9px" }}>PERFORMANCE</p>
                    <p style={{ fontSize: "9px" }}>MANAGEMENT</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title">
                    <p>FUNCTIONAL</p>
                    <p>TEST</p>
                  </div>
                </div>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="co-comp">
                <div className="second-title">
                  <p>TECHNICAL</p>
                  <p>CO-PROJECT</p>
                  <p>MANAGER</p>
                </div>
                <div className="second-subtitle">
                  <p>MARTHINA</p>
                  <p>PAPILAYA</p>
                </div>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title">
                    <p style={{ fontSize: "9px" }}>TECHNICAL &</p>
                    <p style={{ fontSize: "9px" }}>SAP ARCHITECT</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title" style={{ marginTop: "-10px" }}>
                    <p style={{ fontSize: "9px" }}>SURROUNDING</p>
                    <p style={{ fontSize: "9px" }}>SYSTEM</p>
                    <p style={{ fontSize: "9px" }}>INTEGRATION 1</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title" style={{ marginTop: "-10px" }}>
                    <p style={{ fontSize: "9px" }}>SURROUNDING</p>
                    <p style={{ fontSize: "9px" }}>SYSTEM</p>
                    <p style={{ fontSize: "9px" }}>INTEGRATION 2</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <TreeNode
              label={
                <div className="stream-comp">
                  <div className="second-title" style={{ marginTop: "-13px" }}>
                    <p style={{ fontSize: "9px" }}>TECHNICAL</p>
                    <p style={{ fontSize: "9px" }}>DEPLOYMENT &</p>
                    <p style={{ fontSize: "9px" }}>COMMAND</p>
                    <p style={{ fontSize: "9px" }}>CENTER</p>
                  </div>
                </div>
              }
            ></TreeNode>
            <div className="tambahan">
              <img src={IMPL} width="220"></img>
            </div>
          </TreeNode>
        </Tree>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modal-body">
          <p>
            <b>PROJECT DELIVERY MANAGEMENT</b>
          </p>
          <Tree
            nodePadding="0.1px"
            lineWidth="3px"
            lineColor="black"
            lineBorderRadius="10px"
            label={
              <StyledNode>
                <div className="bu-lenny"></div>
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <div className="team-1">
                  <p>LENNY JULIANA SINAGA</p>
                  <p>TEAM LEADER</p>
                </div>
              }
            ></TreeNode>
            <TreeNode label={<div className="team-2"></div>}></TreeNode>
            <TreeNode label={<div className="team-3"></div>}></TreeNode>
          </Tree>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default StrukturOrganisasi;
