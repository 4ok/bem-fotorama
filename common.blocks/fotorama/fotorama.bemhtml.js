block('fotorama').match((ctx, bemjson) => bemjson.options)(

    attrs()((ctx, json) => {
        const { options } = json;

        return Object
            .keys(options)
            .reduce((result, key) => {
                result['data-' + key] = options[key];

                return result;
            }, {});
    })
);
