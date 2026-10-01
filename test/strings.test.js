import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify, truncate } from "../src/strings.js";

test("slugify lowercases and joins words with dashes", () => {
  assert.equal(slugify("  Hello World  "), "hello-world");
  assert.equal(slugify("Ready? Set, go!"), "ready-set-go");
});

test("truncate keeps short text and cuts long text with an ellipsis", () => {
  assert.equal(truncate("short", 10), "short");
  assert.equal(truncate("a long sentence", 6), "a lon…");
});
