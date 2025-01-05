import React from "react";

const Coursematerial = ({ modules }) => {
  return (
    <div className="mb-4 bg-white text-black rounded-md p-4 shadow-md">
      <h3 className="text-lg font-bold mb-4 text-center">Course Material</h3>
      <table className="w-full text-left">
        <tbody>
          {modules.map((module, index) => (
            <tr key={index}>
              <td className="py-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="module"
                    className="form-radio text-green-500"
                  />
                  <span>{module}</span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coursematerial;
