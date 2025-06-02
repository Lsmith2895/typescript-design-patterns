// This file describes a theme generator using the factory pattern
// There are 2 options: Light, Dark
// Each option will return the new colors to be used on the site
interface Theme {
    getTheme(): ColorScheme
}

interface ColorScheme {
    primary: string;
    secondary: string;
    background: string;
}

abstract class ThemeCreator {
    public abstract getThemeCreator(): Theme;

    public showTheme(): ColorScheme {
        const theme = this.getThemeCreator();
        return theme.getTheme()
    }
}

//concreteCreator
class CreateLightTheme extends ThemeCreator {
    public getThemeCreator(): Theme {
        return new LightTheme();
    }
}

class CreateDarkTheme extends ThemeCreator {
    public getThemeCreator(): Theme {
        return new DarkTheme();
    }
}

//concreteProduct
class LightTheme implements Theme {
    public getTheme(): ColorScheme {
        return {
            primary: 'gray',
            secondary: 'green',
            background: 'white'
        }
    }
}

class DarkTheme implements Theme {
    public getTheme(): ColorScheme {
        return {
            primary: 'dark-gray',
            secondary: 'blue',
            background: 'black'
        }
    }
}

export { CreateLightTheme, CreateDarkTheme }
