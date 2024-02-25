import { USER_KEY } from "@/consts/storageKeys";
import { PlansList } from "@/models/plans/plansModel";
import { User } from "@/models/user/userModel";
import { FormFields } from "@/pages/login/components/form";
import { getStorageServices } from "@/services/storageServices";
import React, { FC, createContext, useEffect, useState } from "react";
import { getPlansByAgeAction } from "./actions/plansActions";
import { getUserAction } from "./actions/userActions";

export const Context = createContext({
  user: null as User | null,
  // eslint-disable-next-line
  handleLogin: async (fields: FormFields): Promise<void> => {},
  isLoading: false,
  userError: "",
  // plans!!
  handleGetPlans: async (): Promise<void> => {},
  plans: [] as PlansList[],
  plansLoading: false,
  plansError: "",
});

type ContextProps = {
  children: React.ReactNode | React.ReactNode[];
};

const RootContex: FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userError, setUserError] = useState("");

  const [plans, setPlans] = useState<PlansList[]>([]);
  const [plansError, setPlansError] = useState("");
  const [plansLoading, setPlansLoading] = useState(false);

  useEffect(() => {
    const userStorage = getStorageServices(USER_KEY);
    if (!user && userStorage) {
      setUser(userStorage);
    }

    return () => {
      setUser(null);
    };
  }, []);

  const handleGetPlans = async () => {
    if (!user?.age) return;
    setPlansLoading(true);
    await getPlansByAgeAction(user?.age)
      .then((plans) => setPlans(plans))
      .catch((error) => setPlansError(error));
  };

  const handleLogin = async (fields: FormFields) => {
    setIsLoading(true);
    await getUserAction(fields)
      .then((user) => setUser(user))
      .catch((error) => setUserError(error));

    setIsLoading(false);
  };

  const defaultContext = {
    user,
    handleLogin,
    isLoading,
    userError,
    handleGetPlans,
    plans,
    plansError,
    plansLoading,
  };

  return <Context.Provider value={defaultContext}>{children}</Context.Provider>;
};

export default RootContex;
