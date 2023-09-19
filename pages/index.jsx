import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Home = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/home");
  }, []);
  return <></>;
};

export default Home;
