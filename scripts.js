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
        // Simulate AI response
        const response = "Here's an explanation for: " + userQuery;
        aiResponse.textContent = response;
        
        // Save interaction (for future implementation, e.g., localStorage or database)
        console.log("User Query:", userQuery);
        console.log("AI Response:", response);
        
        // Clear input
        document.getElementById('user-query').value = '';
    }
}

// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
