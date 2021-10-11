import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import "twin.macro";

const Sections = ({ sections }) => {
  return (
    <>
      {sections
        ? sections.map((block, i) => {
            switch (block.type) {
              case "biography":
                return (
                  <React.Fragment key={i}>
                    <About {...block} />
                  </React.Fragment>
                );
              case "portfolio":
                return (
                  <React.Fragment key={i}>
                    <Portfolio {...block} inner />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};

export default Sections;
