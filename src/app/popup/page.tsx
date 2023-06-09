import { useState } from 'react';

type FormConfirmationProps = {
  message: string;
};

const FormConfirmation: React.FC<FormConfirmationProps> = ({ message }) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(true);

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <p>{message}</p>
            <button onClick={closeConfirmation} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormConfirmation;