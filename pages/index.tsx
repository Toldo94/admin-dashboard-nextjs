import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import css from "./index.module.scss";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin-dashboard");
  });
  return null;
};

export default Home;
