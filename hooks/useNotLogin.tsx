import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { delay } from "@/lib/delay";

const useNotLogin = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      toast("Silahkan login terlebih dahulu");
      delay(500);
      router.push("/login");
    } else {
      console.log(user);
      return;
    }
  }, [user]);
};

export default useNotLogin;
