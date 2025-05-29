import { useState } from "react"
import { MinimalistLayout, WorkspaceBuilder, type LayoutStyle } from "./RealWorldExample"

function PatternView () {
    const potentialOfficeItems = ['Desk', 'TrashCan', "Computer", "Keyboard", "Mouse", "Decorations"]
    const [builder] = useState(() => new WorkspaceBuilder(new MinimalistLayout))
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
            <button onClick={() => { handleLayoutChange(new MinimalistLayout) }} >
                Minimalist Layout
            </ button >
            {/* Create a new button to display the Prodictive Layout */}
            <div>
                {displayedItems.map((i) => {
                    return (<div> {i}</div>)
                })}
            </div>
        </>
    )
}

export { PatternView }