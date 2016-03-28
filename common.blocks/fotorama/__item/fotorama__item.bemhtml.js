block('fotorama').elem('item')(

    tag()('img'),

    attrs()(ctx => {

        return {
            src: ctx.ctx.url
        }
    })
);
