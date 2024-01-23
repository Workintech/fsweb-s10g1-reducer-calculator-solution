import { beforeEach, expect, test } from 'vitest';
import React from 'react';
import App from '../App';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<App />);
});

test('Başlangıç operations değeri + olarak doğru ayarlanmış', () => {
  const operation = document.querySelector('#operation');
  expect(operation.textContent).toBe('Operation: +');
});

test('Başlangıç memory değeri 0 olarak doğru ayarlanmış', () => {
  const operation = document.querySelector('#memory');
  expect(operation.textContent).toBe('Memory: 0');
});

test('Başlangıç total değeri 0 olarak doğru ayarlanmış', () => {
  const operation = document.querySelector('#total');
  expect(operation.textContent).toBe('0');
});

test('1, 2, 3 rakamına tıklanınca ekranda 123 sayısını gösteriyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('1'));
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('3'));
  await screen.findByText('123');
});

test('CE ekranı sıfırlıyor', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#total');
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('CE'));
  expect(operation.textContent).toBe('0');
});

test('operatörlere tıklanınca ekranda 0 görünüyor.', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#total');
  await user.click(screen.getByText('CE'));
  await user.click(screen.getByText('2'));
  expect(operation.textContent).toBe('2');
  await user.click(screen.getByText('*'));
  expect(operation.textContent).toBe('0');

  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('+'));
  expect(operation.textContent).toBe('0');

  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('/'));
  expect(operation.textContent).toBe('0');

  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('-'));
  expect(operation.textContent).toBe('0');
});

test('operatörlere tıklanınca Operation: metni doğru işlemi gösteriyor.', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#operation');
  await user.click(screen.getByText('*'));
  expect(operation.textContent).toBe('Operation: *');

  await user.click(screen.getByText('+'));
  expect(operation.textContent).toBe('Operation: +');

  await user.click(screen.getByText('/'));
  expect(operation.textContent).toBe('Operation: /');

  await user.click(screen.getByText('-'));
  expect(operation.textContent).toBe('Operation: -');
});
