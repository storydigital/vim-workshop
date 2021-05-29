import React from "react";

const A = ({ link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
        >
            {link}
        </a>
    );
};

export default A;
