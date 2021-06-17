export const createUserShoe = user_shoe => (
    $.ajax({
        method: 'POST',
        url: 'api/user_shoes',
        data: { user_shoe }
    })
)

export const deletePerform = id => {
    return $.ajax({
        url: `/api/user_shoes/${id}`,
        method: 'DELETE'
    });
}