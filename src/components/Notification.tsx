import { INotification } from "../types/types";

const Notification: React.FC<INotification> = (props) => {
  const {kind, name, email} = props;
  return(
    <>
      <p>Уважаемый, {name}!</p>
      <p>Как только кошки породы {kind} появятся у нас в наличии</p>
      <p>мы сразу сообщим Вам по адресу {email}</p>
    </>
  )
}
export default Notification;