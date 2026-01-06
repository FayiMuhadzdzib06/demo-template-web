export const useAuth = () => {
  const user = useState<any | null>("auth-user");
  const ready = useState<boolean>("auth-ready");
  return { user, ready };
};
