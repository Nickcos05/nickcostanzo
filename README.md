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
4. In a separate terminal, start a local HTTP server to serve the site:
   ```bash
   python -m http.server
   ```
   Then open `http://localhost:8000/index.html` in your browser and ask questions in the chat box.
