export const fetchShoes = filters => (
    $.ajax({
        method: 'GET',
        url: 'api/shoes',
        data: filters
    })
);

export const createShoe = shoe => (
    $.ajax({
        method: 'POST',
        url: 'api/shoes',
        data: shoe,
        processData: false,
        contentType: false,
    })
)