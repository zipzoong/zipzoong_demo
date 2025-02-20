"use client";

import { Suspense } from "react";
import Profile from "./content/profile";

const ProfilePage = () => {
  return (
    <Suspense>
      <Profile />
    </Suspense>
  );
};

export default ProfilePage;
