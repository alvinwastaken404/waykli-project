document.addEventListener("DOMContentLoaded", async function () {
    lucide.createIcons();

    try {
        const res = await fetch("/api/profile");
        const data = await res.json();

        if (!data.success) {
            window.location.href = "/login";
            return;
        }

        const user = data.user;

        const username = user.name
            .toLowerCase()
            .replace(/\s+/g, "");

        const joinDate = new Date(user.createdAt).toLocaleDateString(
            "id-ID",
            {
                day: "numeric",
                month: "long",
                year: "numeric",
            },
        );

        document.getElementById("displayNama").textContent = user.name;
        document.getElementById("displayUsername").textContent =
            "@" + username;
        document.getElementById("displayEmail").textContent =
            user.identity;

        document.getElementById("inputNama").value = user.name;
        document.getElementById("inputEmail").value = user.identity;

        document.getElementById("inputUsernameCard").value = user.name;
        document.getElementById("inputUsernameReal").value = username;

        document.getElementById("joinDate").textContent = joinDate;
        document.getElementById("joinDateInput").value = joinDate;

        document.getElementById("userStatus").textContent = "Member";

    } catch (err) {
        console.error(err);
        window.location.href = "/login";
    }
});

// avatar

const avatarInput = document.getElementById("avatarInput");
const avatarImage = document.getElementById("avatarImage");
const btnCamera = document.getElementById("btnCamera");

btnCamera.addEventListener("click", function () {
    alert("Fitur avatar bisa diaktifkan setelah login & backend storage.");
    avatarInput.click();
});

avatarInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        avatarImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

// profile

const profileForm = document.getElementById("profileForm");
const btnBatal = document.getElementById("btnBatal");

function isGuest() {
    return !document.getElementById("displayNama").textContent ||
        document.getElementById("displayNama").textContent === "Unknown User";
}

profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isGuest()) {
        alert("Silakan login terlebih dahulu.");
        return;
    }

    const namaBaru = document.getElementById("inputNama").value;
    const emailBaru = document.getElementById("inputEmail").value;

    document.getElementById("displayNama").textContent = namaBaru;
    document.getElementById("displayEmail").textContent = emailBaru;

    alert("Perubahan berhasil disimpan (frontend only).");
});

btnBatal.addEventListener("click", function () {
    if (isGuest()) {
        alert("Silakan login terlebih dahulu.");
        return;
    }

    profileForm.reset();
});