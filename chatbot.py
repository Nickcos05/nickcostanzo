from dotenv import load_dotenv
import os
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
import glob

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Load and concatenate all HTML files in this directory into a single text block
def load_site_content():
    texts = []
    for fname in glob.glob("**/*.html", recursive=True):
        with open(fname, encoding="utf8") as f:
            texts.append(f.read())
    return "\n\n".join(texts)

SITE_CONTENT = load_site_content()

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data.get("message", "")
    prompt = f"""
You are Nick Costanzo's personal website assistant. Answer questions strictly based on the content of Nick's website below. If the answer is not contained in the content, respond with "Sorry, I don't have that information."
---
{SITE_CONTENT}
---
User: {user_msg}
Assistant:
"""
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
    )
    reply = response.choices[0].message.content.strip()
    return jsonify({"reply": reply})

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
