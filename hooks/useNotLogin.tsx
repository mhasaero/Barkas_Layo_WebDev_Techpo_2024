import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const useNotLogin = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      alert("Silahkan login terlebih dahulu");
      router.push("/login");
    } else {
      console.log(user);
      return;
    }
  }, [user]);
};

export default useNotLogin;
