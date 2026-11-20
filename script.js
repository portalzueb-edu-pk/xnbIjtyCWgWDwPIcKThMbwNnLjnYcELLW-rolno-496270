// Placeholder data — edit these values for your practice card.
const candidate = {
  "Roll No": "000000",
  "Candidate's Name": "JOHN DOE",
  "Father's Name": "RICHARD DOE",
  "Name of Institute": "SAMPLE PUBLIC SCHOOL",
  "Enrollment No": "SEB/0000/2026/000000",
  "Group": "SAMPLE GROUP",
  "Date of Birth": "01-Jan-2008",
  "Exam Venue": "SAMPLE EXAM CENTRE",
  "Venue Address": "123 Example Street, Sample City",
};

// Build the details table from the data above
const table = document.getElementById("details");

for (const [label, value] of Object.entries(candidate)) {
  const row = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = label + ":";

  const td = document.createElement("td");
  td.textContent = value;

  row.append(th, td);
  table.appendChild(row);
}

// Photo upload: show a preview of the chosen image
const photoInput = document.getElementById("photo-input");
const photo = document.getElementById("photo");
const placeholder = document.getElementById("photo-placeholder");

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) return;

  photo.src = URL.createObjectURL(file);
  photo.style.display = "block";
  placeholder.style.display = "none";
});
