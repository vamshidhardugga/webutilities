import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
