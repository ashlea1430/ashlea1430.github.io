document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        
        button.classList.add('active');
        
        const targetPanel = document.getElementById(button.dataset.tab);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});