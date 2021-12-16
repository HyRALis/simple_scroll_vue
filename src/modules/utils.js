export const getBaseUrl = () => {
    const getUrl = window.location;
    let baseUrl = getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1];
    return baseUrl;
};

export const getFullNameLowercase = (firstname, lastname) => {
    const firstnameLowecase = firstname.toLowerCase();
    const lastnameLowecase = lastname.toLowerCase();

    return `${firstnameLowecase} ${lastnameLowecase}`;
}