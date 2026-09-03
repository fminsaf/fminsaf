import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import z from "zod";

const storageKey = "theme";

export const getTheme = createServerFn({ method: "GET" }).handler(
	() => getCookie(storageKey) || "dark",
);

const themeValidator = z.enum(["dark", "light"]);

export const setTheme = createServerFn({ method: "POST" })
	.validator(themeValidator)
	.handler(({ data }) => setCookie(storageKey, data));
