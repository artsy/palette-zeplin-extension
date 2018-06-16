import { themeProps } from "@artsy/palette";
import { capitalize, findKey } from "lodash";
import Color from "color";

const fontSizeLookup = (fontType, fontSize, lineHeight) => {
  const fontSizes = Object.keys(themeProps.typeSizes);
  const desiredFontSize = fontSizes
    .filter(type => type.includes(fontType))
    .filter(font => themeProps.typeSizes[font].fontSize === fontSize);

  if (desiredFontSize.length === 0) {
    return "?";
  } else if (
    desiredFontSize.some(
      font => themeProps.typeSizes[font].lineHeight === lineHeight
    )
  ) {
    return desiredFontSize
      .filter(font => themeProps.typeSizes[font].lineHeight === lineHeight)[0]
      .split(fontType)[1];
  } else {
    const result = desiredFontSize.map(font => font.split(fontType)[1]);
    return result.length > 1 ? result.join("|") + "?" : result[0];
  }
};

const colorLookup = ({ r, g, b }) =>
  findKey(
    themeProps.colors,
    c => Color(c).rgbNumber() === Color.rgb(r, g, b).rgbNumber()
  );

const fontMapper = ({ textStyles }) =>
  textStyles.map(({ textStyle }) => {
    const { fontFamily, fontSize, lineHeight, color } = textStyle;
    // return JSON.stringify(color);
    // return Color({ r: 0, b: 0, g: 0 }).hex();
    // return colorLookup(color);
    // if (fontFamily) return JSON.stringify(themeProps.typeSizes, null, 2);
    if (fontFamily.match(/garamond/i)) {
      return fontFormatter({
        type: "serif",
        color: colorLookup(color),
        size: fontSizeLookup("serif", fontSize, lineHeight)
      });
    } else if (fontFamily.match(/unica/i)) {
      return fontFormatter({
        type: "sans",
        color: colorLookup(color),
        size: fontSizeLookup("sans", fontSize, lineHeight)
      });
    } else if (fontFamily.match(/avant/i)) {
      return fontFormatter({
        type: "display",
        color: colorLookup(color),
        size: fontSizeLookup("display", fontSize, lineHeight)
      });
    }
  });

const fontFormatter = ({ type, size, color }) =>
  "<" +
  capitalize(type) +
  (size ? ` size="${size}"` : "") +
  (color ? ` color="${color}"` : "") +
  ">" +
  `</${capitalize(type)}>`;

/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {
  return {
    language: "jsx",
    code: fontMapper(selectedLayer).join("\n")
    // code: JSON.stringify(selectedLayer, null, 2)
  };
}

export default {
  layer
};
