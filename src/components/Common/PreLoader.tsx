import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid loding__border border-t-transparent"></div>
    </div>
  );
};

export default PreLoader;