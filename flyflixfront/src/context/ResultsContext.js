// MyContext.js
import { createContext, useState, useEffect } from 'react';

const ResultsContext = createContext({});

export const ResultsContextProvider = ({ children }) => {
    const [destinationResults, setDestinationResults] = useState('');

    const updateResults = (results) => {
        setDestinationResults(results);
        console.log(JSON.stringify(results));
      };

      useEffect(() => {
        console.log("New destinationResults:", destinationResults);
    }, [destinationResults]); 

    return (
        <ResultsContext.Provider value={{destinationResults, updateResults}}>
                {children}
        </ResultsContext.Provider>
    );
};

export default ResultsContext;
