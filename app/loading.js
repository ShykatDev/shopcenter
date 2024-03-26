import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="w-screen h-[50vh] flex justify-center items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/loading.png"
          alt="loading"
          width={20}
          height={20}
          className="animate-spin"
        />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default loading;
