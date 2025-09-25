import { motion } from "framer-motion";

type NotificationProps = {
    error: boolean;
    message: string;
}

const Notification = ({ error, message }: NotificationProps) => {
  return (
    <motion.div className={`fixed z-50 top-0 h-20 p-3 ${error? 'bg-red-200' : 'bg-green-200'}`}>
        <p className={`text-xs font-monts-medium ${error? 'text-red-700' : 'text-green-700'}`}>
            {message}
        </p>
    </motion.div>
  )
}

export default Notification;