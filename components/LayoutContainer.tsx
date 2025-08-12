export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-5 md:px-20 max-w-7xl mx-auto">
            {children}
        </div>
    )
}