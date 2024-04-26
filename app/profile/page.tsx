import React from "react";
import { Profile } from "@/components/pages/profile";
import { Navbar } from "@/components/pages/navbar";
import { Footer } from "@/components/pages/footer";
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
