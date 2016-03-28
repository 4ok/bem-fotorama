block('fotorama').match((ctx, bemjson) => bemjson.options)(

    attrs()((ctx, json) => {
        const options = json.options;
        const attrs   = {};

        for (var i in options) {
            attrs['data-' + i] = options[i];
        }

        return attrs;
    })
);
