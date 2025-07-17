// Research publications "See More" functionality
document.addEventListener('DOMContentLoaded', function() {
    // Journal Publications See More functionality
    const journalSeeMoreBtn = document.getElementById('journal-see-more-btn');
    if (journalSeeMoreBtn) {
        journalSeeMoreBtn.addEventListener('click', function() {
            const hiddenItems = document.querySelectorAll('.journal-publication-item.hidden');
            const isExpanded = hiddenItems.length === 0;
            
            if (isExpanded) {
                // Collapse: hide items after the first 3
                const allItems = document.querySelectorAll('.journal-publication-item');
                allItems.forEach((item, index) => {
                    if (index >= 3) {
                        item.classList.add('hidden');
                    }
                });
                journalSeeMoreBtn.textContent = 'See More Publications';
            } else {
                // Expand: show all hidden items
                hiddenItems.forEach(item => {
                    item.classList.remove('hidden');
                });
                journalSeeMoreBtn.textContent = 'See Less Publications';
            }
        });
    }
    
    // Conference Presentations See More functionality
    const confSeeMoreBtn = document.getElementById('conference-see-more-btn');
    if (confSeeMoreBtn) {
        confSeeMoreBtn.addEventListener('click', function() {
            const hiddenItems = document.querySelectorAll('.conference-presentation-item.hidden');
            const isExpanded = hiddenItems.length === 0;
            
            if (isExpanded) {
                // Collapse: hide items after the first 3
                const allItems = document.querySelectorAll('.conference-presentation-item');
                allItems.forEach((item, index) => {
                    if (index >= 3) {
                        item.classList.add('hidden');
                    }
                });
                confSeeMoreBtn.textContent = 'See More Presentations';
            } else {
                // Expand: show all hidden items
                hiddenItems.forEach(item => {
                    item.classList.remove('hidden');
                });
                confSeeMoreBtn.textContent = 'See Less Presentations';
            }
        });
    }
});
