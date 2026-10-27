import { test } from 'node:test'
import assert from 'node:assert'
import { celsiusToFahrenheit } from './temperature.ts'

test('freezing point', () => {
  assert.strictEqual(celsiusToFahrenheit(0), 32)
})

test('boiling point', () => {
  assert.strictEqual(celsiusToFahrenheit(100), 212)
})

test('scales meet at -40', () => {
  assert.strictEqual(celsiusToFahrenheit(-40), -40)
})

test('body temperature', () => {
  assert.ok(Math.abs(celsiusToFahrenheit(37) - 98.6) < 1e-9)
})

test('negative input', () => {
  assert.strictEqual(celsiusToFahrenheit(-10), 14)
})

test('fractional input', () => {
  assert.strictEqual(celsiusToFahrenheit(0.5), 32.9)
})