import LocalizedStrings from "react-localization";
import en from "./../assets/i18n/en.json";
let files: any = {
  en,
};
let str: {
  en: any;
};

const context = require.context("./../assets/i18n/", false);
if (context) {
  files = [];
  context.keys().forEach((fileName: string) => {
    if (!fileName.endsWith(".json")) {
      files[fileName.substring(2)] = context(fileName);
    }
  });
}

str = files;
export const Locale = new LocalizedStrings(str);
Locale.setLanguage("en");
