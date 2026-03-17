const buttons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons and panels
        buttons.forEach(btn => btn.classList.remove("active"));
        panels.forEach(panel => panel.classList.remove("active"));

        // Add active class to current button
        button.classList.add("active");

        // Show the corresponding panel
        const tabId = button.getAttribute("data-tab");
        const targetPanel = document.getElementById(tabId);
        
        if (targetPanel) {
            targetPanel.classList.add("active");
        }
    });
});
