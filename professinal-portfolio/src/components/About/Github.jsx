import React from "react";
import {GitHubCalendar} from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1
        className="project-heading pb-4"
        style={{ paddingBottom: "20px" }}
      >
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="Poojanpatel2003"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          light: [
            "#161b22",
            "#4c1d95",
            "#6d28d9",
            "#8b5cf6",
            "#c084fc",
          ],
          dark: [
            "#161b22",
            "#4c1d95",
            "#6d28d9",
            "#8b5cf6",
            "#c084fc",
          ],
        }}
      />
    </Row>
  );
}

export default Github;