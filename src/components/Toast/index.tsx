import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { useTransition } from "react-spring";
import { v4 } from "uuid";
import { FiInfo, FiXCircle } from "react-icons/fi";

import { Container } from "./styles";

interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const Toast: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const [id, setId] = useState(String);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, "id">) => {
      const id = v4();
      setId(id);
      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "2%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 },
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, id]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Container
          key={key}
          style={props}
          type={item.type}
          has_description={20}
        >
          <FiInfo size={18} />
          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>

          <button onClick={() => removeToast(id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Container>
      ))}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { Toast, useToast };
