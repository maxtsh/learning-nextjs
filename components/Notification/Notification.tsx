import { useContext, useEffect } from "react";
import NotifContext from "store/NotifContext";
import { Container } from "./styles";

const Notification: React.FC = () => {
  const { notification, hideNotification } = useContext(NotifContext);

  // Remove on timeout every 4 seconds
  useEffect(() => {
    let to: ReturnType<typeof setTimeout>;
    if (notification) {
      to = setTimeout(() => {
        hideNotification();
      }, 5000);
    }
    return () => clearTimeout(to);
  }, [notification]);

  // If no notification detected the return nothing
  if (!notification) return null;

  const colors = {
    textColor: "#000",
    bgColor: "#fff",
  };

  switch (notification?.status) {
    case "success":
      colors.bgColor = "#00ab66";
      colors.textColor = "#fff";
      break;

    case "error":
      colors.bgColor = "#ed2939";
      colors.textColor = "#fff";
      break;

    default:
      break;
  }

  return (
    <Container
      onClick={hideNotification}
      bgColor={colors.bgColor}
      textColor={colors.textColor}
    >
      <h1 className="title">{notification.title}</h1>
      <p className="message">{notification.message}</p>
    </Container>
  );
};

export default Notification;
