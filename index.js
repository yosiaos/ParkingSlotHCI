let selectedSlot = null;

document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('click', function() {
        if (selectedSlot) {
            selectedSlot.classList.remove('selected');
            selectedSlot.classList.add('empty');
        }
        this.classList.remove('empty');
        this.classList.add('selected');
        selectedSlot = this;
        document.getElementById('confirm-btn').disabled = false;
    });
});

document.getElementById('confirm-btn').addEventListener('click', function() {
    if (selectedSlot) {
        const slotId = selectedSlot.id;
        document.getElementById('popup-text').innerText = `Apa anda yakin memilih slot tersebut (${slotId})?`;
        document.getElementById('popup').style.display = 'flex';

        document.getElementById('yes-btn').onclick = function() {
            selectedSlot.classList.remove('selected');
            selectedSlot.classList.add('filled');
            selectedSlot = null;
            document.getElementById('popup').style.display = 'none';
            document.getElementById('confirm-btn').disabled = true;
        }

        document.getElementById('no-btn').onclick = function() {
            document.getElementById('popup').style.display = 'none';
        }
    }
});
