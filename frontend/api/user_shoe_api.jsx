export const fetchUserShoes = data => (
    $.ajax({
        method: 'GET',
        url: 'api/user_shoes',
        data
    }) 
)

export const createUserShoe = user_shoe => (
    $.ajax({
        method: 'POST',
        url: 'api/user_shoes',
        data: { user_shoe }
    })
)

export const deleteUserShoe = data => {
    return $.ajax({
        url: `/api/user_shoes/1`,
        method: 'DELETE',
        data
    });
}