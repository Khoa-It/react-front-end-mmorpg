
const API_URL = {
    login: 'http://127.0.0.1:5000/admin/login',
    getAllUser: 'http://127.0.0.1:5000/admin/getAllUser'
}

function apiConfig(data, med) {
    if (!data) return {
        method: med, // HTTP method
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
    };

    return {
        method: med, // HTTP method
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data),
    }
}

export async function apiLogin(params) {
    try {
        const res = await fetch(API_URL.login, apiConfig(params, "POST"));
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

export async function apiGetAllUser(params) {
    try {
        const res = await fetch(API_URL.getAllUser, apiConfig(null,"GET"));
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}