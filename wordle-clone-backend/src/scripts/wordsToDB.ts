import { supabase } from '../supbaseClient';

type DataMuseWord = { word: string; score: number };

const insertingWords = async () => {
  const words = await fetch('https://api.datamuse.com/words?sp=?????');
  if (!words.ok) {
    throw new Error('Error fetching words from datamuse');
  }
  const json = (await words.json()) as DataMuseWord[];
  const justWords = json.map((entry) => entry.word);
  justWords.forEach((word) => word.toLowerCase().trim());

  const wordJson = justWords.map((entry) => ({
    word: entry,
  }));
  console.log(wordJson);

  try {
    console.log('Saving words to db');
    const { error } = await supabase.from('words').insert(wordJson);
    if (error) {
      console.log(error);
    }
  } catch (error) {
    throw new Error();
  }
};

insertingWords();
