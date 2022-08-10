import React from "react";

export function PageLoader() {
  return (
    <div className="lds" id="loader">
      <div className="semipolar-spinner">
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
      </div>
    </div>
  );
}
