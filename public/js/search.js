$(document).ready(() => {

    // Define global latitude and longitude variables
    // we'll get values for these dynamically during the request
    // and then use them to parse the results
    let latitude;
    let longitude;

    // Setup geocode api hook
    var Geocoder = new google.maps.Geocoder();

    // Establish form field hooks:
    const categoryField = $('#categorySelect');
    const tagField = $('#tagField');
    const resultsGoHere = $('#resultsContainer');

    // For getting info from our radio buttons we'll use the following jquery pattern:
    // $('input[name="elementNAME"]:checked')
    const qualityName = 'minQualityOptions';
    const quantityName = 'minQuantityOptions';
    const priceName = 'minPriceOptions';

    // When the user clicks the submit button, we should do an ajax query to our own backend api
    // then display a list of formatted results below the form

    $('#searchSubmit').click((event) => {

        // Stop page from refreshing
        event.preventDefault();

        // Reset global variables to defaults to we don't contaminate the new search with old constraints
        latitude = undefined;
        longitude = undefined;

        //First make sure that if an address was provided, it can be validated
        // unlike with creating a store, we'll do this silently and only bother the user
        // if no matches can be found
        let location = $('#fromHereField').val();
        let distance = $('#distanceSelect').val();
        let geocodeResults;
        let geocodeError;

        getGeocode({ address: location })
            .then((results) => {
                geocodeResults = results;
            })
            .catch((status) => {
                geocodeError = status;
            })
            .finally(() => {

                // Create an object to construct our search query in
                let searchData = {};

                if (location && distance) {
                    if (geocodeResults) {
                        console.log('Go GO Gadget geocodeResults!')
                        console.log(geocodeResults)
                        latitude = geocodeResults[0].geometry.location.lat();
                        longitude = geocodeResults[0].geometry.location.lng();
                        searchData['distance'] = distance;
                    } else {
                        console.log("And this is where we'd pop up an error modal")
                        console.log(geocodeError)
                    }
                }

                

                // Populate with the lat/lng values we just got, if there were any
                searchData['latitude'] = latitude;
                searchData['longitude'] = longitude;

                // Populate searchData object from DOM
                // To start with we need to reformat the category names to match the query inputs we want
                let parsedCategory = categoryField.val().split(' ');
                parsedCategory = [parsedCategory[0].toLowerCase(), parsedCategory[1] || ''];
                parsedCategory = parsedCategory.join('');
                if (parsedCategory === '(any)') { parsedCategory = undefined };
                // Then load up our query object
                searchData['type'] = parsedCategory;
                searchData['tag'] = tagField.val();
                searchData['minimumQuality'] = $(`input[name="${qualityName}"]:checked`).val();
                searchData['minimumQuantity'] = $(`input[name="${quantityName}"]:checked`).val();
                searchData['minimumPrice'] = $(`input[name="${priceName}"]:checked`).val();

                console.log('DEBUG: Search Data:')
                console.log(searchData)

                // Query DB with user info
                $.ajax({
                    dataType: "json",
                    url: '/api/search',
                    data: searchData
                })
                    .done(displaySearchResults)  // Definied later

                    .fail(function (err) {
                        console.log('querie failed');
                        console.log(err);
                    })
            })
    })

    function displaySearchResults(results) {

        // First thing's first, we need to delete any existing results every time the user clicks search, so they're always getting
        // fresh data
        resultsGoHere.empty();

        // After we get results, the first thing we'll add is a page break just for visual effect
        resultsGoHere.append('<hr>');

        // First we'll see if any results at all were returned, if not inform user
        if (!results.length) {
            resultsGoHere.append(
                `<div class="row"><h3>No stores were found matching the specified criteria</h3></div>`
            )
        }

        // If we do have results, however, we need to format each once nicely, then append it to the results area
        for (let i = 0; i < results.length; i++) {

            // Set up some containers for our data
            let newRow = $('<div class="row my-3">');
            let newCol1 = $('<div class="col-md-5 col-12">');

            // Add in our data
            newCol1.append(`
        <h5><a href="/stores/${results[i].id}">${results[i].name}</a></h5> 
        <h6><a class="addressLink" target="_blank" href="https://www.google.com/maps/place/${results[i].address.split(' ').join('+')}">${results[i].address}</a></h6> 
        `)

            // Append applicable categories to newCol1
            let categoryList = $('<p>Categories: </p>');
            let categoryListString = '';
            if (results[i].hasFashion) { categoryListString += ' Fashion,' }
            if (results[i].hasFurniture) { categoryListString += ' Furniture,' }
            if (results[i].hasHomeGoods) { categoryListString += ' Home Goods,' }
            if (results[i].hasMisc) { categoryListString += ' Miscelaneous,' }

            categoryList.append(categoryListString.slice(0, -1))

            // Then throw the column into the row and append the row to the page
            newCol1.append(categoryList);
            newRow.append(newCol1);
            resultsGoHere.append(newRow);

        }
    };

    function findDistance(lat1, lng1, lat2, lng2) {
        // This is just the pythagorean theorum 
        let a = lat1 - lat2;
        let b = lng1 - lng2;

        return Math.sqrt((a * a) + (b * b))
    }

    // This will clear out the validation error class from the address field (if present)
    // any time it is edited
    $('#fromHereField').keyup(function () {
        $('#fromHereField').removeClass('is-invalid');
    })

    function getGeocode(addressLitteral) {
        return new Promise(function (res, reject) {
            Geocoder.geocode(addressLitteral, function (results, status) {
                if (status == 'OK') {
                    res(results)
                } else {
                    reject(status)
                }
            })
        })
    }

});

// Deleting this function breaks google maps api integration even though it doesn't "do" anything
function initMap() {
    // Do nothing, but stop the google api complaining that this function doesn't exist
}