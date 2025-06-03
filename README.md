# nickcostanzo

Personal Portfolio

## Local Chatbot Development

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Create a `.env` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=sk-...
   ```
3. Run the Flask server:
   ```bash
   python chatbot.py
   ```
4. Serve the website locally so that the browser can fetch `/chat`. You can use
   a simple HTTP server or Jekyll:
   ```bash
   # option 1
   python -m http.server

   # option 2 (if you use Jekyll)
   bundle exec jekyll serve
   ```
   The Flask app listens on `PORT` (defaults to `5000`). Whichever URL you load
   the site from must be able to reach the Flask server at the same URL used in
   `script.js` (currently `fetch('/chat')`). Configure your ports accordingly so
   that the browser can POST to `/chat`.
