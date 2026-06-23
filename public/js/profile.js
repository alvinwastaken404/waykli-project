document.addEventListener("DOMContentLoaded", async () => {
    lucide.createIcons();

    try {
        const res = await fetch("/api/profile");

        if (!res.ok) {
            throw new Error("Gagal mengambil profil");
        }

        const data = await res.json();

        if (!data.success || !data.user) {
            window.location.href = "/login";
            return;
        }

        const user = data.user;

        const username =
            user.username ||
            user.name.toLowerCase().replace(/\s+/g, "");

        const joinDate = user.createdAt
            ? new Date(user.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
              })
            : "-";

        // ===== TAMPILKAN DATA =====

        document.getElementById("displayNama").textContent =
            user.name || "Unknown User";

        document.getElementById("displayUsername").textContent =
            "@" + username;

        document.getElementById("displayEmail").textContent =
            user.identity || user.email || "-";

        document.getElementById("inputNama").value =
            user.name || "";

        document.getElementById("inputEmail").value =
            user.identity || user.email || "";

        document.getElementById("inputUsernameCard").value =
            user.name || "";

        document.getElementById("inputUsernameReal").value =
            username;

        document.getElementById("joinDate").textContent =
            joinDate;

        document.getElementById("joinDateInput").value =
            joinDate;

        document.getElementById("userStatus").textContent =
            "Member";

        // ===== AKTIFKAN FORM =====

        document.getElementById("btnCamera").disabled = false;
        document.getElementById("btnCamera").classList.remove(
            "cursor-not-allowed",
            "opacity-50",
        );

        document.getElementById("btnBatal").disabled = false;
        document.getElementById("btnBatal").classList.remove(
            "cursor-not-allowed",
        );

        document
            .querySelector('button[type="submit"]')
            .removeAttribute("disabled");

        document
            .querySelector('button[type="submit"]')
            .classList.remove(
                "opacity-50",
                "cursor-not-allowed",
            );

        [
            "inputNama",
            "inputEmail",
            "inputUsernameReal",
            "currentPassword",
            "newPassword",
        ].forEach((id) => {
            document.getElementById(id).disabled = false;
            document
                .getElementById(id)
                .classList.remove(
                    "cursor-not-allowed",
                );
        });
    } catch (err) {
        console.error(err);
    }
});

// ================= AVATAR =================

const avatarInput = document.getElementById("avatarInput");
const avatarImage = document.getElementById("avatarImage");
const btnCamera = document.getElementById("btnCamera");

btnCamera?.addEventListener("click", () => {
    avatarInput.click();
});

avatarInput?.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        avatarImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
});

// ================= FORM =================

const profileForm = document.getElementById("profileForm");

profileForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Fitur update profile belum dihubungkan ke backend.");
});

const btnBatal = document.getElementById("btnBatal");

btnBatal?.addEventListener("click", () => {
    location.reload();
});