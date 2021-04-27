const Tabsbtn = document.querySelectorAll(".tab-item");


Tabsbtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        currentBtn.classList.add("active");
        
        if (! currentBtn.classList.contains("active")) {
            Tabsbtn.forEach(function(item) {
                item.classList.remove("active")
            });

        }
    });
});
