export const fetchShoes = filters => (
    $.ajax({
        method: 'GET',
        url: 'api/shoes',
        filters
    })
);