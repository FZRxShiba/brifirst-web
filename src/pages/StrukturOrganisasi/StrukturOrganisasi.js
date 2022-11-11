import React, { useState, useEffect } from "react";
import "./StrukturOrganisasi.css";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";

const StrukturOrganisasi = () => {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
    border: 1px solid #05355d;
    background-color: white;
  `;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tree-container">
      <div className="tree-wrapper">
        <Tree
          lineWidth={"2px"}
          lineColor={"white"}
          lineBorderRadius={"10px"}
          label={
            <StyledNode>
              <b>
                <p>PROJECT MANAGER</p>
              </b>
              <p>SANDRA CHALIK</p>
            </StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode>
                <b>PROJECT DELIVERY MANAGER</b>
              </StyledNode>
            }
          ></TreeNode>
          <TreeNode
            label={
              <StyledNode>
                <b>
                  <p>FUNCTIONAL</p>
                  <p>CO-PROJECT MANAGER</p>
                </b>
                <p>ROULI ERLYANA AMBARITA</p>
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  <b>BUSINESS PROCESS</b>
                </StyledNode>
              }
            ></TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <b>GENERAL LEDGER</b>
                </StyledNode>
              }
            ></TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <b>PROFITABILITY & PERFORMANCE MANAGEMENT</b>
                </StyledNode>
              }
            ></TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <b>FUNCTIONAL TEST</b>
                </StyledNode>
              }
            ></TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <StyledNode>
                <b>
                  <p>TECHNICAL</p>
                  <p>CO-PROJECT MANAGER</p>
                </b>
                <p>MARTHINA PAPILAYA</p>
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  <b>TECHNICAL & SAP ARCHITECT</b>
                </StyledNode>
              }
            ></TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <b>SURROUNDING SYSTEM INTEGRATION 1</b>
                </StyledNode>
              }
            ></TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <b>SURROUNDING SYSTEM INTEGRATION 2</b>
                </StyledNode>
              }
            ></TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <b>TECHNICAL DEPLOYMENT & COMMAND CENTER</b>
                </StyledNode>
              }
            ></TreeNode>
          </TreeNode>
        </Tree>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
