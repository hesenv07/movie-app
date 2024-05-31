/* eslint-disable prefer-rest-params */
function clamp(value) {
    const min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    if (process.env.NODE_ENV !== 'production') {
        if (value < min || value > max) {
            console.error(
                'Material-UI: The value provided '
                    .concat(value, ' is out of range [')
                    .concat(min, ', ')
                    .concat(max, '].'),
            );
        }
    }

    return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 */

function hexToRgb(color) {
    color = color.substr(1);
    const re = new RegExp('.{1,'.concat(color.length >= 6 ? '2' : '1', '}'), 'g');
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
        colors = colors.map(function (n) {
            return n + n;
        });
    }

    return colors
        ? 'rgb'.concat(colors.length === 4 ? 'a' : '', '(').concat(
              colors
                  .map(function (n, index) {
                      return index < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
                  })
                  .join(', '),
              ')',
          )
        : '';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 */

function decomposeColor(color) {
    // Idempotent
    if (color.type) {
        return color;
    }

    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf('(');
    const type = color.substring(0, marker);

    let values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
        return parseFloat(value);
    });
    return {
        type: type,
        values: values,
    };
}
/**
 * Converts a color object with type and values to a string.
 *
 */

function recomposeColor(color) {
    const type = color.type;
    let values = color.values;

    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map(function (n, i) {
            return i < 3 ? parseInt(n, 10) : n;
        });
    } else if (type.indexOf('hsl') !== -1) {
        values[1] = ''.concat(values[1], '%');
        values[2] = ''.concat(values[2], '%');
    }

    return ''.concat(type, '(').concat(values.join(', '), ')');
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 */

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 */

export function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
        color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
}

export function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] *= 1 - coefficient;
        }
    }

    return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 */

export function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] += (255 - color.values[i]) * coefficient;
        }
    }

    return recomposeColor(color);
}
