document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const featureSections = document.querySelectorAll('.feature-section');

    // Function to show a specific section and activate its button
    const showSection = (targetId) => {
        featureSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
                // *** هذا هو السطر الجديد الذي يقوم بالتمرير ***
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                section.classList.remove('active');
            }
        });

        navButtons.forEach(button => {
            if (button.dataset.target === targetId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    };

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            showSection(targetId);
            // اختياري: يمكنك هنا أيضًا تحديث الـ URL hash (الجزء بعد #)
            // window.location.hash = targetId;
        });
    });

    // Show the first section by default when the page loads
    const initialHash = window.location.hash.substring(1); // Remove the '#'
    if (initialHash && document.getElementById(initialHash)) {
        showSection(initialHash);
    } else {
        if (featureSections.length > 0) {
            showSection(featureSections[0].id);
        }
    }
});