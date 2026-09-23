import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppointmentSimulator } from './AppointmentSimulator';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, initialService, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Dialog */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1">
              <AppointmentSimulator
                initialService={initialService}
                onClose={onClose}
                isModal={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
