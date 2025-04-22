import { Button } from "@/components/ui/button"

export default function Charte() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex-col items-center justify-center mt-10 grid">
            <Button className="mt-5 bg-accent"/>
            <Button className="mt-5 bg-foreground"/>
            <Button className="mt-5 bg-primary"/>
            <Button className="mt-5 bg-secondary"/>
            <Button className="mt-5 bg-destructive"/>
            <Button className="mt-5 bg-muted"/>
            <Button className="mt-5 bg-popover"/>
            <Button className="mt-5 bg-card"/>
            <Button className="mt-5 bg-border"/>
            <Button className="mt-5 bg-input"/>
            <Button className="mt-5 bg-ring"/>
            <Button className="mt-5 bg-placeholder"/>
            <Button className="mt-5 bg-disabled"/>
            <Button className="mt-5 bg-accent-muted"/>
            <Button className="mt-5 bg-accent-foreground"/>
            </div>
        </section>
    )
}
