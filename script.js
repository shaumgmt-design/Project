// 🔒 IMPORTANT
// Put your NEW ElevenLabs API key here — DO NOT share it anywhere.
const ELEVEN_API_KEY = "f79fb19002fb9502b293feea7b6a548b4b6888a08b8b941c041df1fe119e007e";

// Your Agent ID (safe to share)
const AGENT_ID = "agent_7401ka687b8zf528yr0cbk5xx2r9";

const startBtn = document.getElementById("startInterviewBtn");
const endBtn = document.getElementById("endInterviewBtn");
const modal = document.getElementById("interviewModal");
const agentContainer = document.getElementById("agentContainer");

startBtn.addEventListener("click", () => {
    modal.style.display = "block";

    agentContainer.innerHTML = `
        <elevenlabs-convai 
            agent-id="${AGENT_ID}" 
            api-key="${ELEVEN_API_KEY}"
        ></elevenlabs-convai>
    `;
});

endBtn.addEventListener("click", () => {
    modal.style.display = "none";
    agentContainer.innerHTML = "";
});
