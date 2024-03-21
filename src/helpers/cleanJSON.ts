import jsonrepair from "jsonrepair";

export const cleanJSON = (dirtyJSON: string): any => {
    // Remove markdown formatting
    const cleanedJSON = dirtyJSON.replace(/```json/g, '').replace(/`/g, '');

    // Fix decimals that don't start with zero
    let fixedJSON = cleanedJSON.replace(/:\s*\.(\d+)/g, ': 0.$1');

    try {
        //@ts-ignore
        fixedJSON = jsonrepair(cleanedJSON);
    } catch (error) {

    }

    return fixedJSON;
}


