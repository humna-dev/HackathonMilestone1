function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "block") {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
    }
}
