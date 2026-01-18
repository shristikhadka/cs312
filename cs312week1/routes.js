import fetch from 'node-fetch';

// The hello route - returns "Hello World!"
export const hello = (req, res) => {
    res.send('Hello World!');
};

// The APINames route - fetches user data from an API
export const APINames = async (req, res) => {
    const url = 'https://www.usemodernfullstack.dev/api/v1/users';
    let data;

    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.log(error);
        res.send('Error fetching data');
        return;
    }

    const names = data.map(user => `${user.id}: ${user.name}`).join('<br>');
    res.send(names);
};
