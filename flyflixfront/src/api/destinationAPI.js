
import OpenAI from "openai";



// Set your OpenAI API key
const apiKey = process.env.API_KEY;

// Initialize OpenAI object with your API key
const openai = new OpenAI({ apiKey: 'INSERT API HERE',dangerouslyAllowBrowser: true });

const destinations = async (activities, budget, additionalInformation, cuisine, days) => {
    const myArray = [];

        const completion = await openai.chat.completions.create({
        //     messages: [{ role: "system", 
        //     content: `Provide one trip option in the US with the following input preferences: 
        //     Cusisine: ${cuisine} 
        //     Activities: ${activities} 
        //     Budget: ${budget} 
        //     AdditionalInformation: ${additionalInformation} 
        //     Days: ${days} 
        //     additionalInformation: ${additionalInformation} 
        //     Repeat the process three times to return an array of json objects with each of these attributes.
        //     1) CityName
        //     2) IATA
        //     2) StateName
        //     3) ApproximateCost
        //     4) PossibleHotels
        //     5) Activities
        //     6) Restaurants
        //     7) SimpleItinerary
    
        // ` }],
            messages: [{ role: "system", 
            content: `Provide one trip option in the US with the following input preferences: 
            Cuisine: ${cuisine} 
            Activities: ${activities} 
            Budget: ${budget} 
            AdditionalInformation: ${additionalInformation} 
            Days: ${days} 
            Repeat the process three times to return an array of 3 json objects with each of these attributes being their own keys.
            1) CityName
            2) IATA
            2) Description
            Make sure that all the information is returned in a JSON format without any sort of errors or issues
            And note, For the description this should include Approximate Cost to go on the trip, possible hotels, Activities, Restaurants, and SimpleItinerary in a readable and flowing short paragraph.


        ` }],
            model: "gpt-3.5-turbo",
          });
          console.log("right under here")
          console.log(completion.choices[0].message.content);
          const response = JSON.parse(completion.choices[0].message.content);
      
        //console.log(completion.choices)
          console.log(response);
      //console.log(completion.choices[0]);
      return completion.choices[0].message.content;
  };
  
  export default destinations;


// Set your OpenAI API key


// Initialize OpenAI object with your API key



