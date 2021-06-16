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

export const updateShoe = (data, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/shoes/${id}`,
        data,
        processData: false,
        contentType: false,
    })
)

export const deleteShoe = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/shoes/${id}`
    })
)