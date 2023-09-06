// Sample data for demonstration purposes
const criminals = [
    {
        name: "SCP 1",
        image: "https://yt3.ggpht.com/a/AGF-l79PmhcFgjymoKDqgahj4ITrITVQWRsTfGOKHQ=s900-mo-c-c0xffffffff-rj-k-no",
        description: "Description of scp 1 test."
    },
    {
        name: "SCP 2",
        image: "https://yt3.ggpht.com/a/AGF-l79PmhcFgjymoKDqgahj4ITrITVQWRsTfGOKHQ=s900-mo-c-c0xffffffff-rj-k-no",
        description: "Description of scp2 test."
    }
];

const searchInput = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestionBox");

searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLowerCase().trim();
    suggestionBox.innerHTML = "";

    if (inputValue.length === 0) {
        suggestionBox.style.display = "none";
        return;
    }

    const suggestions = criminals.filter(criminal => criminal.name.toLowerCase().includes(inputValue));

    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement("div");
            suggestionDiv.textContent = suggestion.name;
            suggestionDiv.addEventListener("click", () => {
                searchInput.value = suggestion.name;
                suggestionBox.style.display = "none";
                searchCriminal();
            });
            suggestionBox.appendChild(suggestionDiv);
        });
        suggestionBox.style.display = "block";
    } else {
        suggestionBox.style.display = "none";
    }
});

function searchCriminal() {
    const searchValue = searchInput.value.trim();
    const result = document.querySelector(".result");

    for (const criminal of criminals) {
        if (criminal.name.toLowerCase() === searchValue.toLowerCase()) {
            document.getElementById("criminalName").textContent = criminal.name;
            document.getElementById("criminalImage").src = criminal.image;
            document.getElementById("criminalDescription").textContent = criminal.description;
            result.style.display = "block";
            suggestionBox.style.display = "none";
            return;
        }
    }

    // Display a message if the criminal is not found
    document.getElementById("criminalName").textContent = "Criminal not found";
    document.getElementById("criminalImage").src = "";
    document.getElementById("criminalDescription").textContent = "";
    result.style.display = "block";
}
