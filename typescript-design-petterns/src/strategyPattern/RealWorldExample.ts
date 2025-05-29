// This file defines how to generate an office layout based on user preferences.
// There are 3 layout options: Minimalist, Aesthetic, and Productive.
// Each layout style determines which items are included in the user's office.
// The layout logic is interchangeable, making it easy to customize the workspace experience.

export interface LayoutStyle {
  arrange(items: string[]): string[];
}

class WorkspaceBuilder {
  private layoutStyle: LayoutStyle;

  constructor(layoutStyle: LayoutStyle) {
    this.layoutStyle = layoutStyle;
  }

  setLayoutStyle(style: LayoutStyle) {
    this.layoutStyle = style;
  }

  buildLayout(items: string[]): string[] {
    console.log("Arranging your workspace...");
    return this.layoutStyle.arrange(items);
  }
}

class MinimalistLayout implements LayoutStyle {
  arrange(items: string[]): string[] {
    return items.filter(i => i === 'Desk');
  }
}

// Implement The Productive Class here:
//  Try you best to understand the minimalist class not just pattern match it.
//  The way you can know if you didn't pattern match is if you can answer these questions succinctly.
//  Ask yourself these questions: 
//      1. Why does the MinimalistLayout class implement LayoutStyle not WorkSpaceBuilder?
//      2. What is LayoutStyle?
//      3. What if we wanted to return multiple items for the productive class like a Desk, a Mouse, and a Keyboard?

const items = ['Desk', 'TrashCan', "Computer", "Keyboard", "Mouse", "Decorations"]

// Minimalist strategy usage example:
const minimalistStrategy = new MinimalistLayout
const createMinimalistLayout = new WorkspaceBuilder(minimalistStrategy)
console.log('creating a minimalist layout')
createMinimalistLayout.buildLayout(items)

// Create the Productive strategy usage example here: 
// Ask yourself these questions:
//  1. What is a new ProductiveLayout?
//  2. Do you need to create a completely new WorkSpaceBuilder? (HINT: setLayoutStyle)
//  3. did you get the correct return value?

export { MinimalistLayout, WorkspaceBuilder}