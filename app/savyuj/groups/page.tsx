"use client";
import React from "react";
import { Groups } from "@/components/pages/groups";
import { useRouter } from "next/router";

const YujPage = ({
  params,
}: {
  params: {
    yuj: string;
  };
}) => {
  return (
    <div>
      <Groups />
    </div>
  );
};

export default YujPage;
