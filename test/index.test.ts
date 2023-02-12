import { test, assert } from "vitest"
import { beautify } from "../src"

test("colorify console", () => {
  assert.equal(
    beautify("text-azure-500", "foo"),
    "\u001b[38;2;59;130;246mfoo\u001b[0m",
  )
})
