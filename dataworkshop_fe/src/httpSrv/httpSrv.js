const get = async url => {
    const response = await fetch(`api/${url}`);
    return await response.json();
};

export default {
    get: get
};
