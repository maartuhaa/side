let equipmentStatus = {
    1: true, 2: true, 3: true, 4: true,
    5: true, 6: true, 7: true, 8: true
};

const overlay = document.getElementById("overlay");
const bookingModal = document.getElementById("bookingModal");
const unavailableModal = document.getElementById("unavailableModal");
const statusButtons = document.querySelectorAll(".status-btn");

let selectedEquipmentId = null;

statusButtons.forEach(button => {
    button.addEventListener("click", function () {
        let id = this.getAttribute("data-id");
        if (equipmentStatus[id]) {
            selectedEquipmentId = id;
            overlay.style.display = 'block';
            bookingModal.style.display = 'block';
        } else {
            overlay.style.display = 'block';
            unavailableModal.style.display = 'block';
        }
    });
});

document.querySelector(".book-btn").addEventListener("click", function () {
    if (selectedEquipmentId) {
        equipmentStatus[selectedEquipmentId] = false;
        document.querySelector(`[data-id="${selectedEquipmentId}"]`).innerText = "Unavailable";
        document.querySelector(`[data-id="${selectedEquipmentId}"]`).classList.add("unavailable");
        bookingModal.style.display = 'none';
        overlay.style.display = 'none';
    }
});

document.querySelector(".close-btn").addEventListener("click", function () {
    unavailableModal.style.display = 'none';
    overlay.style.display = 'none';
});
