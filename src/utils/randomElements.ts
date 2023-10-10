import { AnimalData } from "../interface/animal";

export const getRandomKeysAndValues = (animalData: AnimalData, numKeys: number): { key: string, value: string[] }[] => {
  const keys = Object.keys(animalData);
  
  if (numKeys <= 0 || numKeys > keys.length) {
    throw new Error("Invalid number of keys");
  }
  
  const randomKeys = getRandomElements(keys, numKeys);
  
  return randomKeys.map((key) => ({
    key,
    value: animalData[key],
  }));
};


export const getRandomElements = <T>(array: T[], numElements: number): T[] => {
  if (numElements <= 0 || numElements > array.length) {
    throw new Error("Invalid number of elements");
  }

  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, numElements);
};
