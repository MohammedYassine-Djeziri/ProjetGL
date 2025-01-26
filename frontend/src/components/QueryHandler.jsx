// components/QueryHandler.jsx
import React from 'react';
import { BeatLoader } from 'react-spinners'; // Or any loading indicator

const QueryHandler = ({
   query, // Should contain: isLoading, isError, error, data, refetch 
   children
}) => {
   const { isLoading, isError, error, data, refetch } = query;

   if (isLoading) {
      return (
         <div className="flex justify-center items-center h-32">
            <BeatLoader color="#3B82F6" size={12} />
            <span className="ml-2 text-blue-500">Loading...</span>
         </div>
      );
   }

   if (isError) {
      return (
         <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600 mb-3">Error: {error.message}</p>
            <button
               onClick={refetch}
               className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
               Retry
            </button>
         </div>
      );
   }

   return children(data);
};

export default QueryHandler;