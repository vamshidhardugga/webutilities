export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <div className="container mx-auto p-2">{children}</div>
      </main>
    </>
  )
}
