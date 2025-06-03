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

## Deploying the Chatbot on Railway

1. Commit the included `Procfile` and updated `requirements.txt` to your Git repository.
2. Push the repository to GitHub if it isn't already there.
3. Sign in to [Railway](https://railway.app) and create a **New Project** from your GitHub repo.
4. In the project settings, add an environment variable named `OPENAI_API_KEY` with your key.
5. Add a `.ruby-version` file specifying Ruby `3.1.2` to satisfy Railway's builder. The provided `Gemfile` causes Ruby to be detected, and without this version file the build fails.
6. Deploy the service. Railway will install the requirements and start the server using the Procfile command.
7. Note the generated service URL and update `API_URL` in your site if needed so the chat box sends requests to `https://your-service-url/chat`.

