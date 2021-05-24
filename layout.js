// example Layout.js
import React from "react";

export default ({ children }) => (
    <div
        style={{
            flex: 1,
            width: "80%",
            padding: "2rem",
        }}
    >
        {children}
    </div>
);
