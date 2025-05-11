
function changeImage(thumbnail) {
    document.getElementById("mainImage").src = thumbnail.src;
}


function changeVariant(color) {
    console.log('Selected color:', color);
}

function toggleTab(tab) {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tabContent => tabContent.style.display = 'none');
    
    const activeTab = document.getElementById(tab);
    activeTab.style.display = 'block';
}


document.getElementById('sizeChartBtn').onclick = function() {
    document.getElementById('sizeChartModal').style.display = 'block';
};

document.getElementById('compareBtn').onclick = function() {
    document.getElementById('compareModal').style.display = 'block';
};


function closeModal() {
    document.getElementById('sizeChartModal').style.display = 'none';
    document.getElementById('compareModal').style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == document.getElementById('sizeChartModal') || event.target == document.getElementById('compareModal')) {
        closeModal();
    }
};
