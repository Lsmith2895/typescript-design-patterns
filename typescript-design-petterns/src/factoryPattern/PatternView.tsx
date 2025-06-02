import { useState } from 'react';
import { CreateLightTheme, CreateDarkTheme } from './RealWorldExample';

function ThemeFactoryView() {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');

  const themeCreator =
    selectedTheme === 'light' ? new CreateLightTheme() : new CreateDarkTheme();

  const theme = themeCreator.showTheme();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Factory Pattern: Theme Generator</h1>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="theme"
            value="light"
            checked={selectedTheme === 'light'}
            onChange={() => setSelectedTheme('light')}
          />
          Light Theme
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={selectedTheme === 'dark'}
            onChange={() => setSelectedTheme('dark')}
          />
          Dark Theme
        </label>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Theme Colors:</h2>
        <ul className="list-disc pl-5">
          <li>Primary: {theme.primary}</li>
          <li>Secondary: {theme.secondary}</li>
          <li>Background: {theme.background}</li>
        </ul>
      </div>
    </div>
  );
}

export { ThemeFactoryView };
