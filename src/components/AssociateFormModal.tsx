import React from 'react';
import { X } from 'lucide-react';
import AssociateForm from './AssociateForm';

interface AssociateFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssociateFormModal: React.FC<AssociateFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-background rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
        <div className="p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          
          <h2 className="text-2xl font-bold mb-6">Join Our Developer Network</h2>
          <AssociateForm onSubmitSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AssociateFormModal;