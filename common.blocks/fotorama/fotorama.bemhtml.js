block('fotorama')
(
    match(function () {
        const ctx = this.ctx;

        return ctx.options
    })
    (
        attrs()(function() {
            const options = this.ctx.options;
            let attrs     = {};

            for (var i in options) {
                attrs['data-' + i] = options[i];
            }

            return attrs;
        })
    )
);
