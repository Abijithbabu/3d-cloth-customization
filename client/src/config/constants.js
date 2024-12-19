import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
import { TextureOne, TextureTwo, TextureThree } from '../assets'

export const EditorTabs = [
  // {
  //   name: "colorpicker",
  //   icon: swatch,
  // },
  // {
  //   name: "filepicker",
  //   icon: fileIcon,
  // },
  // {
  //   name: "aipicker",
  //   icon: ai,
  // },
  {
    name: "textureOne",
    icon: TextureTwo,
  },
  {
    name: "textureTwo",
    icon: TextureThree,
  },
  {
    name: "textureThree",
    icon: TextureOne
  }
];

export const FilterTabs = [
  // {
  //   name: "logoShirt",
  //   icon: logoShirt,
  // },
  // {
  //   name: "stylishShirt",
  //   icon: stylishShirt,
  // },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
