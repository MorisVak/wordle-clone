import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';
const app = express();

const supabaseUrl = 'https://fnlopwqyupjdllabzdpw.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

if (supabaseKey) {
  const supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.log('Couldnt connect to supabase');
}
app.use(express.static('dist'));
app.use(express.json());
