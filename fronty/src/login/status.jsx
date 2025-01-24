import { useState } from "react";
import TopBarRL from "../components/TopBarRL";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


function StatusSelection() {
  const [status, setStatus] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleContinue = () => {
    // Handle the continue action based on the selected status
    console.log('Selected status:', status);
    // You can add navigation logic here
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <TopBarRL />
      <div className="bg-primary w-full h-full flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl font-bold text-white">Quel est votre Status:</h1>
        <div className="flex flex-row gap-2">
          <label className="flex items-center gap-2 text-white font-bold rounded-lg">
            <input
              type="checkbox"
              name="status"
              value="Expert"
              checked={status === 'Expert'}
              onChange={handleStatusChange}
            />
            Expert
          </label>
          <label className="flex items-center gap-2 text-white font-bold rounded-lg">
            <input
              type="checkbox"
              name="status"
              value="Apprenant"
              checked={status === 'Apprenant'}
              onChange={handleStatusChange}
            />
            Apprenant
          </label>
        </div>
        <Button
          onClick={handleContinue}
          className="bg-secondary text-white p-2 rounded-lg min-w-[300px]"
          disabled={!status}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}

export default StatusSelection;