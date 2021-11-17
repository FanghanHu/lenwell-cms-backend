module.exports = async (ctx, next) => {
    

    await next();
    if(ctx.response.status === 200) {
        strapi.io.emit("message", ctx.response.body);
    }
}