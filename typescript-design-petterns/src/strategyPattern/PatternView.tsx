import { useState } from "react"
import { MinimalistLayout, WorkspaceBuilder, type LayoutStyle } from "./RealWorldExample"

function PatternView () {
    const potentialOfficeItems = ['Desk', 'TrashCan', "Computer", "Keyboard", "Mouse", "Decorations"]
    const minimalistLayout = new MinimalistLayout;
    const [builder] = useState(() => new WorkspaceBuilder(minimalistLayout))
    const [displayedItems, setDisplayedItems] = useState<string[]>([])


    const handleLayoutChange = (layout: LayoutStyle) => {
        builder.setLayoutStyle(layout);
        setDisplayedItems(builder.buildLayout(potentialOfficeItems))
    }
    
    return (
        <>
            <h1>
                Strategy Pattern
            </h1>
            <button onClick={() => { handleLayoutChange(minimalistLayout) }} >
                Minimalist Layout
            </ button >
            {/* Create a new button here to display the Productive Layout */}
            <div>
                {displayedItems.map((i) => {
                    return (
                        <div key={i}>
                            {i}
                        </div>)
                })}
            </div>
        </>
    )
}

export { PatternView }