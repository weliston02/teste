document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart-icon');
    const modal = document.getElementById('modal2');
    const closeModal = document.getElementById('close2');

    heart.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
