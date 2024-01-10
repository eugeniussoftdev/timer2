import { useEffect, useState } from "react";

type Pages = "/" | "/login" | "/timer" | "/chart" | "/pricing" | "/contact";

export const useLocation = () => {
  const [page, setPage] = useState<Pages>("/");
  useEffect(() => {
    setPage(location.pathname as Pages);
  }, []);

  return {
    page,
  };
};
