export default function Footer() {
  return (
    <>
      <footer className="border-t">
        <div className="container mx-auto p-2">
          <p className="text-center text-sm">&copy; {new Date().getFullYear()} Web Utilities.</p>
        </div>
      </footer>
    </>
  )
}
