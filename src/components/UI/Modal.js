import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ message, title, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Close</Button>
      </footer>
    </Card>
  );
};

const Modal = ({ title, message, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={message} title={title} onClose={onClose} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
