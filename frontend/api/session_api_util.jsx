export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: user,
        processData: false,
        contentType: false,
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: user,
        processData: false,
        contentType: false,
    }, err => {
        console.log(err);
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);