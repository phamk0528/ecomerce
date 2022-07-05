import React from "react"; const Tooltip = ({ title, children, code }) => {
  return (
    <div class="tooltip">
      {children}
      <span
        class="tooltiptext"
        dangerouslySetInnerHTML={{
          __html: code ? `<pre>${title}</pre>` : title
        }}
      />
    </div>
  );
};

export default Tooltip;