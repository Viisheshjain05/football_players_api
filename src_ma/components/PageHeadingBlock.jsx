import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

/**
 * Simple Headong Block For Pages Heading
 * @param {string} heading  heading Of The Block
 * @param {string} icon  icon Of The Block
 * @param {string} link  link Of The Block
 * @param {string} description  description Of The Block
 * @return {JSX} Simple Text block with heading icon and description for pages
 *
 */

const PageHeadingBlock = (props) => {
  const { heading = "", icon = "", link = "#", description = "" } = props;

  return (
    <>
      <h1>
        <Link to={link} style={{ display: "flex", alignItems: "center" }}>
          {icon !== "" && (
            <img
              style={{ width: "1em", margin: "0em .2em .1em" }}
              src={icon}
              alt={icon}
            />
          )}
          {heading}
        </Link>
      </h1>{" "}
      <p>{description} </p>
    </>
  );
};

// const  = BtnTxt;
PageHeadingBlock.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};
export default PageHeadingBlock;
