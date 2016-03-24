block('fotorama')
    .match(function () {
        return this.ctx.options
    })(
        attrs()(function() {
            const options = this.ctx.options;
            const attrs   = {};

            for (var i in options) {
                attrs['data-' + i] = options[i];
            }

            return attrs;
        })
    );
