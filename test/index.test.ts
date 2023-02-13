import { test, assert } from "vitest"
import { beautify } from "../src"

test("colorify console", () => {
  assert.equal(
    beautify("text-azure-500", "foo"),
    "\u001b[38;2;59;130;246mfoo\u001b[0m",
  )
})

test("链式调用", () => {
  let result = beautify("text-azure-500")("foo")
  assert.equal(
    result,
    "\u001b[38;2;59;130;246mfoo\u001b[0m",
  )
})

test("返回一个函数", () => {
  let azureText = beautify("text-azure-500")
  assert.equal(
    azureText("foo"),
    "\u001b[38;2;59;130;246mfoo\u001b[0m",
  )
})