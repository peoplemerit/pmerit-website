// Toggle AI Help Panel
function toggleAiPanel() {
    const aiPanel = document.getElementById('ai-panel');
    aiPanel.classList.toggle('hidden');
}

// Submit user query and save interaction
function submitQuery() {
    const userQuery = document.getElementById('user-query').value;
    const aiResponse = document.getElementById('ai-response');
    
    if (userQuery.trim()) {
        const response = "Here's an explanation for: " + userQuery;
        aiResponse.textContent = response;
        console.log("User Query:", userQuery);
        console.log("AI Response:", response);
        document.getElementById('user-query').value = '';
    }
}

// Toggle Mobile Menu with Slide-in Effect
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
