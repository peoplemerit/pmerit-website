// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.transform = 'translateX(0)';
    } else {
        navLinks.style.transform = 'translateX(-100%)';
    }
}

// Toggle AI Help Panel
function toggleAiPanel() {
    const aiPanel = document.getElementById('ai-panel');
    if (aiPanel) {
        aiPanel.classList.toggle('hidden');
        if (!aiPanel.classList.contains('hidden')) {
            document.getElementById('user-query').focus();
        }
    }
}

// Submit user query and display AI response
function submitQuery() {
    const userQuery = document.getElementById('user-query').value;
    const aiResponse = document.getElementById('ai-response');
    if (userQuery.trim()) {
        const response = "Here's an explanation for: " + userQuery;
        aiResponse.textContent = response;
        document.getElementById('user-query').value = '';
    }
}
