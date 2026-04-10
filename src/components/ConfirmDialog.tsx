import Modal from './Modal';

interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Modal onClose={onCancel}>
      <div role="dialog" aria-modal="true" aria-labelledby="confirm-dialog-title" className="space-y-8 py-8">
        <div className="space-y-4">
          <h2 id="confirm-dialog-title" className="text-3xl font-black text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{message}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 font-bold transition hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-green-600 text-white font-black transition hover:bg-green-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
