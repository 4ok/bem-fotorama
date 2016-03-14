block('fotorama').elem('item')
(
    tag()('img'),

    attrs()(function () {
        const ctx = this.ctx;

        return {
            src: ctx.url
        }
    })
);
