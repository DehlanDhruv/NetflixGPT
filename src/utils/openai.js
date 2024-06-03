import OpenAI from 'openai';
import { OPENAI_KEY } from './Constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser: true  // this is to make the openai api call from browser / client side .. ideally it should be made from browser side
});

export default openai;