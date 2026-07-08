What is Prompt Engineering :-

- Prompt Engineering is the practice of designing and refining the instruction (called prompts) given to an AI model to get better, more accurate & more useful output.
- Prompt Engineering helps us to write a good prompt.

What is LLM :-

- LLM stands for Large Language Model.
- it is an AI model trained on massive amount of text data to ->

1. understand language
2. predict the next word in a sentence
3. Generate meaningful response

ex. google keyboard

Role of LLM in Prompt Engineering :- 

- Prompt Engineering -> How you talk
- LLM -> Who you are talking to

- LLM's helps us to ->

1. read our prompt
2. Interpret out intent
3. Generate a good response based on our prompt

Module 1 -> Introduction to LLM & Prompting Basics

Descriminative AI ->

- Descriminative AI is a AI technique that helps us to classify the data.
- ex.

1. Email - spam & not spam
2. Face ID (face recognition)
3. Netflix recommendation etc...


Generative AI ->

- In generative AI, it not only classify the data but it generate some new data through AI.
- ex.

1. ChatGpt (text generation/image)
2. MidJourney (image generation)
3. Github Copilot (code generation) etc....

Evolution of  -> RNN, LSTM & Transformer

1. RNN (Recurrent Neural Network)

- An RNN is a type of neural network designed to process sequential data like..
    - text
    - speech
    - time series etc...
- it process the data step by step.
- it remember previous information using hidden state in RNN.

Previous inf. -> RNN -> new Inf.

Ex. sentence - "I love AI"
RNN reads it - "I" -> then "love" -> then "AI"
(like keeping memory of previous word)

The dis-advantages are ->

1. It can't remember a long sentence because of short memory.
2. struggle with reading long sentence.

2. LSTM :- 
 - It stands for Long Short-Term Memory.
 - it is an improved version of RNN 

How LSTM works -> 

- LSTM uses some gates to control info.
    - forget gate -> removes the useless data
    - input gate -> adds new data/ info.
    - output gate -> decides what's the output

- basically it acts like a "smart memory system".

Advantages ->

- it solve RNN's memory problem.
- work well for 
    - language translation
    - speech recognition
    - Time-series prediction

3. Transformer ->

- Transformer is a modern AI architecture that power LLM's (like chatGPT).

How it works ->

- uses self-attention mechanism.
    (it allows to understand context, relation between words in a sequence)
- looks at all words at once, not step by step. 

ex. "the animal didn't cross the road because it was tired"

- in this example, the transformer understand "it" refers to animal using attention mechanism.

Advantages -> 

1. Handle long context very well. 
2. Faster (processing is very first)
3. Give more accurate output than RNN/LSTM.

feature             RNN              LSTM             Transformer
data processing     sequential       sequential       parallel
memory              short            long             very long
speed               slow             slow             fast
Performance         basic            better           best

Prompt Engineering ->

-  By the help of transformer we can do the prompt engineering in a better way.

1. long context : transformer helps to memeorize the long context given in the prompt. (it works on parallel data processing)
2. Contextual Understanding : If we can put same word in different form then transformer also understand that word properly.

ex. Bank (river bank, financial bank)

- AI don't read our words, it read tokens 
- we can't take 1 token as 1 word, although "unbelievable" word can segregate to different token.

ex.


- words : "playing" -> play + ing
- words : "trnasformation" -> trans + form + ation 

- AI didn't understand words directly so we can segregate different token to form prefix (re-, un-) & (-ing, -ation, -ed) so that AI can recreate some words by recognize it properly.

Token -> 

AI Tools                Approx token limit

chatGPT                 ~128,000 to ~256,000 token
                        (depending on version)
Gemini                  ~1,000,000 to ~2,000,000 tokens
Claude                  ~200,000 tokens (standard)
                        upto ~1,000,000 token (enterprize)
Perplexity              ~128,000 to ~200,000 tokens 

Context window of Different LLM's :- 

1. chatGPT -> excellent for long discussion, essays, emails, summarization within it's ~128k - ~256 tokens.

2. Gemini -> processing multiple books, large size docs at once, large codebase analysis in one snapshot, complex project tasks across long charts etc...

3. Claude -> it is ideal for large document reasoning/ scsnning with more safely.

4. Perplexity AI -> uses in various backend model.

Structure Prompting -> 

1. Role (person role)
2. Context
3. Task (what action we perform)
4. Constraints (negative constraints)
5. Output

use case - 1 : writing and content creation 

simple prompt -> write a cold email for google internship.

engineering prompt -> "act as a carrier coach. Write a personalized cold email to a recruiter at google for a data science internship. Mention my proficiency in python & SQL. Keep the tone professional but eager & limit it to 150 words"

use case : coding and technical task 

simple prompt -> fix this code (some code)

E. prompt -> "act as a senior python developer. review the following code for a log-in logics, identify potential security vulnerabilities and logical errors. provide the corrected code with comments explaining each fix."

Module 2 -> core prompting technique -> 

1. Zero shot prompting : "direct order"

- In this prompting we didn't give any example to AI but we provide a small instruction and we think that by the help of pre-trained knowledge, AI will provide the answers.

prompt -> classify the sentiment of this review: "the battery life of this laptop is amazing but the screen is a bit dull."

output -> mixed/neutral

2. Few shot prompting : the "pattern maker"

- we have faced some problem on zero shot prompting because sometimes it failed but in few shot prompting, we have to give 3,4 example to understand the pattern of our prompt then it gives a good response.

ex. give the customer feedback in json 
input/prompt -> 
example 1 : I love the pizza! -> {"sentiment": "positive", "label": 1}
example 2 : The delivery was late -> {"sentiment" : "negative", "label": 0}
example 3 : The food was okay -> {"sentiment" : "neutral", "label": 0.5}

3. Chain of Thought (COT) : the "logical thinker" 

- this is the most important technique to solve complex problem. If we can put anything in AI, and we give prompt "think step by step" but AI will look in full sentence and create the logic then give the output. So it's create a little "hallucination"/ confusion.

- use case -> 
- prompt -> " a farmer has 15 sheep. All but 8 die. How much are left ? let's think step-by-step"

1. total sheep - 15
2. all but 8 die means only 8 are left but rest sheep are die.
3. so only 8 sheeps are present.

final ans is - 8 

4. Instruction Prompting : framework

- in this prompting we can put step by step instruction so that it will give the required output.

- person (role) : "act as a senior python developer"
- constraints (limit) : "don't use external libraries. keep code under 20 lines"
- specific instruction : "explain the code like i am 5 years old"

use case -> writting professional email

prompt -> "act as a polite HR manager. Write a rejection email for a candidate who cleared the interview but we can't hire due to budget cuts. Mention that we will keep their cv for future. constraints -> keep it simple & empathetic, don't mention the exact budget amount."

Module 3 - Advanced Prompt Engineering Frameworks ->

1. ReAct Framework (reason + Action)

- React means reason + acting.
- Before some time AI only think or AI only give the result but now in ReAct framework AI will work on the basis of a loop. Like it will think first then give the result then think again whether it's right or wrong then again give the result.

Use case -> Researching a market trend using AI with browsing capabilities (like chatGPT with search or Perplexity)

Prompt -> "Solve the following task using a
thought-action-observation loop. Task: analyze the current stock performance of NVIDIA compared to its competitors in the last 7 days.

Instruction: 
1. Start with a 'thought' (what do we need to find?)
2. perform an Action (search for the specific data)
3. provide an observation (summarize what we find)
4. repeat until you provide a final recommendation fro a short-term investor."

2. Three of Thoughts (TOT)

- Three of Thoughts is more efficient that "chain of thoughts", we can say TOT is a big brother of COT.
- In "COT" AI can think for only one line but in "TOT" it can segregate one line into different branches / nodes like as a tree then think it separately.  

Use Case -> In TOT the strategies are suppose will take A, B & C in these 3 branches of a line suppose we find B will work better than C / A then they cancel C / A only take B as the resultant.

Prompt -> "Imagine three different experts are brainstorming a solution to this problem : how can a small local bakery increases it's sales by 50% in 3 months with a budget of only $500 ?"