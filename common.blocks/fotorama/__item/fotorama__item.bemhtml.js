block('fotorama').elem('item')(

    tag()('img'),

    attrs()(function () {

        return {
            src: this.ctx.url
        }
    })
);
