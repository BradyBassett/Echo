"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  let auth = false; // TODO - Replace with actual authentication logic
  useEffect(() => {
    if (!auth) {
      router.push("/landing");
    }
  }, [auth, router]);

  return (
    <div className="">
    </div>
  );
};

export default Home;
