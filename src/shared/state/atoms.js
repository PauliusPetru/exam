import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: "en",
});

export const filterState = atom({
  key: "filterState",
  default: "all",
});

export const sortState = atom({
  key: "sortState",
  default: "new",
});

export const searchState = atom({
  key: "searchState",
  default: "",
});
