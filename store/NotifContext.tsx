import { useState, useMemo, useCallback, createContext } from "react";

interface NotificationData {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
}

interface NotifCtxType {
  notification: NotificationData | null;
  showNotification: (data: NotificationData) => void;
  hideNotification: () => void;
}

const NotifContext = createContext<NotifCtxType>({
  notification: null,
  showNotification: () => null,
  hideNotification: () => null,
});

export const NotifiProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<NotificationData | null>(null);

  const showNotif = useCallback((data: NotificationData) => {
    setState(data);
  }, []);

  const hideNotif = useCallback(() => {
    setState(null);
  }, []);

  const ctx: NotifCtxType = useMemo(() => {
    const value = {
      notification: state,
      showNotification: showNotif,
      hideNotification: hideNotif,
    };
    return value;
  }, [state]);

  return <NotifContext.Provider value={ctx}>{children}</NotifContext.Provider>;
};

export default NotifContext;
