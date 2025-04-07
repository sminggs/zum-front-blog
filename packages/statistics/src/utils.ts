import { v4 as uuid } from "@lukeed/uuid";

export const createPuid = () => {
  return uuid().replace(/^.|.$/g, "F");
};

export const getCookies = () => {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  return Object.fromEntries(cookies.map((cookie) => cookie.split("=")));
};

export const getCookie = (name: string) => {
  return getCookies()[name];
};
