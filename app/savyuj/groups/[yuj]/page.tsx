import React from "react";
import Yuj from "@/components/pages/yuj";

const YujPage = ({ params }: { params: { yuj: string } }) => {
  return (
    <div>
      <Yuj yuj={params.yuj} />
    </div>
  );
};

export default YujPage;
