export default async function(to, from, next) {
    document.title = `${to.name} | Unbottle`;
    next();
}