"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supbaseClient_1 = require("../supbaseClient");
const insertingWords = async () => {
    const words = await fetch('https://api.datamuse.com/words?sp=?????');
    if (!words.ok) {
        throw new Error('Error fetching words from datamuse');
    }
    const json = (await words.json());
    const justWords = json.map((entry) => entry.word);
    justWords.forEach((word) => word.toLowerCase().trim());
    const wordJson = justWords.map((entry) => ({
        word: entry,
    }));
    console.log(wordJson);
    try {
        console.log('Saving words to db');
        const { error } = await supbaseClient_1.supabase.from('words').insert(wordJson);
        if (error) {
            console.log(error);
        }
    }
    catch (error) {
        throw new Error();
    }
};
insertingWords();
