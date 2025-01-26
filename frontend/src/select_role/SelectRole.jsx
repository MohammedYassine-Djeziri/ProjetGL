import React from 'react';
import TopBarRL from '../components/TopBarRL';
import { useNavigate } from 'react-router-dom';
import { th } from 'framer-motion/client';
import { Button } from '@nextui-org/react';

const SelectRole = () => {
   const roles = ["expert", "Apprenant"];
   const [selectedRole, setSelectedRole] = React.useState("");
   const [isPending, setIsPending] = React.useState(false);
   const [error, setError] = React.useState("");
   const [isSuccess, setIsSuccess] = React.useState(false);
   const navigate = useNavigate();


   const handleRoleSelect = (role) => {
      setSelectedRole(role);
      console.log(`Selected role: ${role}`);
   };

   const handleSubmit = async () => {
      try {
         setIsPending(true);

         const url = selectedRole === "expert"
            ? "https://glbackend-tdpm.onrender.com/DzSkills/instructors/"
            : "https://glbackend-tdpm.onrender.com/DzSkills/students/";


         console.log(`Selected url: ${url}`);

         const res = await fetch(url, {
            method: "POST",
            headers: {
               "Authorization": `JWT ${localStorage.getItem("access_token")}`,
               "Content-Type": "application/json",
            },
         });

         if (!res.ok) {
            throw new Error("Network response was not ok: " + res.statusText);
         }

         setIsSuccess(true);
         await timeout(1000);
         navigate(selectedRole === "expert" ? "/expert" : "/student");
      } catch (error) {
         setError(error.message);
         console.error("An error occurred:", error);
      } finally {
         setIsPending(false);
      }

   };

   return (
      <>
         <TopBarRL />
         <div className="min-h-screen bg-primary text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Quel est votre Status:*</h1>
            <div className="flex flex-row items-center  space-x-8 justify-center">
               <label className="flex items-center space-x-4">
                  <input
                     type="checkbox"
                     name="status"
                     value="expert"
                     checked={selectedRole === 'expert'}
                     onChange={() => handleRoleSelect('expert')}
                     className="w-6 h-6 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-2xl">Expert</span>
               </label>
               <label className="flex items-center space-x-4">
                  <input
                     type="checkbox"
                     name="status"
                     value="Apprenant"
                     checked={selectedRole === 'Apprenant'}
                     onChange={() => handleRoleSelect('Apprenant')}
                     className="w-6 h-6 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-2xl">Apprenant</span>
               </label>
            </div>
            <Button
               className="bg-secondary hover:bg-green-600 text-black font-bold py-2 px-4 rounded mt-8"
               onPress={handleSubmit}
               isLoading={isPending}
            >
               {isPending ? "Submitting..." : "Continuer"}
            </Button>
            {error != null && <p className="text-red-500 mt-4">{error}</p>}
            {isSuccess && <p className="text-green-500 mt-4">Role selected successfully!</p>}
         </div>
      </>
   );
};

export default SelectRole;
