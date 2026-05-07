import { Button } from './Button';
import { Modal } from './Modal';

export function ConfirmDialog({ open, title, message, onCancel, onConfirm }: { open: boolean; title: string; message: string; onCancel: () => void; onConfirm: () => void }) {
  return (
    <Modal open={open} title={title} onClose={onCancel}>
      <p className="text-neutral-300">{message}</p>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Confirm delete</Button>
      </div>
    </Modal>
  );
}
