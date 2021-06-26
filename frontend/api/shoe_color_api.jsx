export const createShoeColor = shoe_color => (
    $.ajax({
        method: 'POST',
        url: 'api/shoe_colors',
        data: { shoe_color }
    })
)