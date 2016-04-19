block('fotorama').elem('item')(

    tag()('img'),

    attrs()(ctx => ({
        src : ctx.ctx.url,
    }))
);
