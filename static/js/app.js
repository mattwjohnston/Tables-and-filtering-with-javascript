// from data.js
var tableData = data;

// selecting table, datetime input, and filter button
var tbody = d3.select("tbody");
var datetimeInput = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");
filterButton.disabled = true;

// puts all initial data into the table
tableData.forEach((entry) => {
    var row = tbody.append("tr");
    Object.values(entry).forEach(value => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

//gets input date and immediately edits the table when the input is changed.
var dtfilter = "";
var filtered = {};
datetimeInput.on("change", (event => {
    dtfilter = d3.event.target.value;
    tbody.html("");
    console.log(dtfilter);
    //if the filterDates function is given an empty string, it will return all entries.
    var filtered = tableData.filter(filterDates);
    filtered.forEach((entry) => {
        var row = tbody.append("tr");
        Object.values(entry).forEach(value => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
}));

//filters dates and if no date is typed, it will return all entries
function filterDates(entry) {
    if (dtfilter) {
        return entry.datetime == dtfilter;
    } else {
        return entry;
    }
};

//the button is disabled, but this was going to run.  It filters the entries then re-populates the table afrer clearing it out.
filterButton.on("click", (event => {
    tbody.html("");
    console.log(dtfilter);
    var filtered = tableData.filter(filterDates);
    filtered.forEach((entry) => {
        var row = tbody.append("tr");
        Object.values(entry).forEach(value => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
}));



///dropdown code
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    event.preventDefault();

  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }